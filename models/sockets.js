

class Sockets{

    constructor( io ){
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){

        // On conections
        this.io.on('connection', (socket) => {
            // Escuchar evento
            socket.on('msg-cliente', (data) => {
                console.log(data);
        
                this.io.emit("mensaje-from-server", {
                    txt: data.texto
                });
        
            });
        });
    }

}

module.exports = Sockets;