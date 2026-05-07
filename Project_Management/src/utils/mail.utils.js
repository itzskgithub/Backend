import mailgen from 'mailgen'

const emailVerificationMailgenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to my app, i am excited to showcase my first ever backend project",

            action: {
                insturctions: "To verify your email please click on the following button",
                button: {
                    color: '#12c927',
                    text: 'Verify your email',
                    link: verificationUrl
                },
            },
            outro: "Need help, or have questions? Just reply to this email, I will love to help.",
        },
    };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: "We got a request to reset the password of your account",

            action: {
                insturctions: "To reset the password click on the following button or link",
                button: {
                    color: '#ea0b3f',
                    text: 'Reset password',
                    link: passwordResetUrl
                },
            },
            outro: "Need help, or have questions? Just reply to this email, I will love to help.",
        },
    };
};

export {emailVerificationMailgenContent, forgotPasswordMailgenContent};