export default ({type, ...details}) => {
    switch(type) {
        case "location": return `${details[details.basedOn]} ${details.basedOn === "time" ? "minutes" : "kilometers"} before ${details.location.latitude}`;
        case "classic": return `Wake me up on ${details.time}`;
        case "qrcode": return `Wake me up on ${details.time} and make me scan the code`
    }
}