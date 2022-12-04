import http from "../http-common";

class shippingService {
    create(data) {
        return http.post("/shipping/insert", data);
    }

    getAll() {
        return http.get("/shipping/getAll");
    }

    deleteShipping(id) {
        return http.delete(`/shipping/delete/${id}`)
    }

    updateShipping(id, data) {
        return http.put(`/shipping/update/${id}`, data)
    }
}

export default new shippingService();