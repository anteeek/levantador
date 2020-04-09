export const renderTitle = ({type, ...details}) => {
    switch(type) {
        case "location": return `${details[details.basedOn]} ${details.basedOn === "time" ? "minutes" : "kilometers"} before ${details.location.latitude}`;
        case "classic": return `Wake me up on ${details.time}`;
        case "qrcode": return `Wake me up on ${details.time} and make me scan the code`
    }
}

export const getIcon = ({type}) => {
    switch(type) {
        case "location": return "crosshairs-gps";
        case "classic": return "alarm";
        case "qrcode": return "qrcode";
    }
}