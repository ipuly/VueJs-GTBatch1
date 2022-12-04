<template>
    <div>
        <div class="row justify-content-center my-5">
            <div class="col-6 p-5 rounded bg-light box-shadow" id="div-shipping" @submit.prevent="inputShipping" v-show="!success">
                <h2 class="text-center mb-5">Shipping Form</h2>
                <form id="form-shipping">
                    <div class="form-row">
                        <div class="form-group col-6">
                            <label for="InputFirstName">First Name</label>
                            <input
                                v-model="shippingData.first_name" 
                                type="text" 
                                class="form-control" 
                                id="InputFirstName"
                                placeholder="Enter your first name" required />
                        </div>
                        <div class="form-group col-6">
                            <label for="InputPassword">Phone number</label>
                            <input 
                                v-model="shippingData.phone_number"
                                type="text" 
                                class="form-control" 
                                id="InputPassword"
                                placeholder="Enter phone number" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-6">
                            <label for="InputLastName">Last name</label>
                            <input 
                                v-model="shippingData.last_name"
                                type="text" 
                                class="form-control" 
                                id="InputLastName"
                                placeholder="Enter your last name" required />
                        </div>
                        <div class="form-group col-6">
                            <label for="InputCity">City</label>
                            <input v-model="shippingData.city" type="text" class="form-control" id="InputCity" placeholder="Enter city" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-6">
                            <label for="InputEmail">Email address</label>
                            <input 
                                v-model="shippingData.email" 
                                type="email" 
                                class="form-control" 
                                id="InputEmail" aria-describedby="emailHelp"
                                placeholder="Enter Email" />
                        </div>
                        <div class="form-group col-6">
                            <label for="InputPostal">Postal Code</label>
                            <input v-model="shippingData.postal_code" type="postal" class="form-control" id="InputPostal"
                                placeholder="Enter postal code" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-12">
                            <label for="InputAddress">Address</label>
                            <textarea v-model="shippingData.address" type="text" class="form-control" id="InputAddress" aria-describedby="addressHelp"
                                placeholder="Enter address" required></textarea>
                        </div>

                        <div class="form-group col-12">
                            <button type="submit" class="btn rounded bg-pink">{{ buttonFunc }}</button>
                        </div>
                    </div>
                </form>
            </div>

            <!-- Form -->
            <SuccessFormComponent v-show="success"></SuccessFormComponent>

        </div>
    </div>
</template>

<script>
import shippingService from '@/services/shippingService';
import SuccessFormComponent from "./SuccessFormComponent.vue";


export default {
    name: 'FormComponent',

    data() {
        return {
            shippingData: {
                "first_name": null,
                "last_name": null,
                "email": null,
                "phone_number": null,
                "city": null,
                "postal_code": null,
                "address": null
            },
            success : false,
            buttonFunc : "Submit"
        }
    },
    methods : {
        inputShipping(){
            let data = this.shippingData;

            if (this.buttonFunc === "Submit") {
                shippingService.create(data)
                    .then(response => {
                        console.log(response.data);
                        this.success = true;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            } else {
                shippingService.updateShipping(data.id, data)
                    .then(response => {
                        console.log(response);
                        this.success = true;
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },
    },

    components: {
        SuccessFormComponent
    },

    props: ["shippingDataProps"],
    watch: {
        'shippingDataProps'(newValue) {
            this.shippingData = newValue;
            console.log(this.shippingData);
            this.buttonFunc = "Update"
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-shadow {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.202);
    padding: 10px;
    border: 1px grey;
}
.border-pink {
    border: 2px solid pink;
}

</style>
