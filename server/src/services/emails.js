const { MailtrapClient } = require("mailtrap");

const API_Token = process.env.API_Token;


const client = new MailtrapClient({
  token: API_Token,
});


const sender = {
  email: "hello@funcuba.it.com",
  name: "Fun Cuba",
};


async function sendEmail(clientEmail, reservationId){
client.bulk
  .send({
    from: sender,
    to: [ {email:"kuva5008@gmail.com"}, {email:clientEmail}],
    subject: "Fun Cuba. Confirmation of your reservation!",
    html: `
        <p>Hey there!</p>
        <p>Welcome to Fun Cuba! super cool that you chose out service</p>
        <p>My name's Carlos Infante</p>
        <p>This is your reservation number: ${reservationId}</p>
        <p>We'll contact you soon! </p>
        <br>
        <p>Regards,</p>
        <p>Carlos</p>
        `,
    category: "Integration Test",
  })
  .then(console.log, console.error);
    
}

module.exports = {
    sendEmail
}