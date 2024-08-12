export function getDayName(day) {
    switch (day) {
        case 'L':
            return 'Lunes'
        case 'M':
            return 'Martes'
        case 'K':
            return 'Miércoles'
        case 'J':
            return 'Jueves'
        case 'V':
            return 'Viernes'
        case 'S':
            return 'Sábado'
        case 'D':
            return 'Domingo'
        default:
            return 'ERROR';
    }

}

export function getDecodeId(token) {
        // Split the JWT into its three parts
        const parts = token.split('.');

        if (parts.length !== 3) {
            throw new Error('Invalid token');
        }
    
        // Get the payload part (second part of the JWT)
        const payload = parts[1];
    
        // Base64Url decode the payload
        const base64Url = payload.replace(/-/g, '+').replace(/_/g, '/');
        const base64 = atob(base64Url);
        
        // Parse the JSON string into an object
        const jsonPayload = decodeURIComponent(Array.prototype.map.call(base64, function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
}