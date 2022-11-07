export default class HotelBookingv {
    Id?: number;
    RoomNumber: number;
    ClientName: string;
    

    constructor(id: number, roomNumber: number, clientNumber: string) {
        this.Id = id;
        this.RoomNumber = roomNumber;
        this.ClientName = clientNumber;
    }
}