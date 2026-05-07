import { User } from "../models/user.models.js";
import { Apiresponses } from "../utils/api_responses.js";
import { Apierrors } from "../utils/api_errors.js";
import { asyncHandler } from "../utils/async_handler.js";
import {
  emailVerificationMailgenContent,
  sendEmail,
} from "../utils/mail.utils.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();

    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Apierrors(
      500,
      "Something went wrong while generating access token",
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new Apierrors(409, "User with email or username already exists", []);
  }

  const user = await User.create({
    email,
    password,
    username,
    isEmailVerified: false,
  });
  const { unHashedToken, hashedToken, tokenExpiry } =
    user.generateTemporaryToken();

  user.emailVerificationToken = hashedToken;
  user.emailVerificationExpiry = tokenExpiry;

  await user.save({ validateBeforeSave: false });

  await sendEmail({
    email: user?.email,
    subject: "Please verigy your email",
    mailgenContent: emailVerificationMailgenContent(
      user.username,
      `${req.protocol}://${req.get("host")}/api/v1/user/verify-email/${unHashedToken}`,
    ),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken - emailVerificationToken -emailVerificationExpiry",
  );

  if (!createdUser) {
    throw new Apierrors(500, "Sometning went wrong while registering the user");
  }

  return res
    .status(201)
    .json(
      new Apiresponses(
        200,
        { user: createdUser },
        "User registered successful and verification email has been sent on your email",
      ),
    );
});

export { registerUser };
