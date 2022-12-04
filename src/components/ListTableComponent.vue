<template>
    <div class="row justify-content-center mt-5">
        <table class="table table-bordered table-hover col-10 text-center">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nomor Telepon</th>
                    <th scope="col">Alamat</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="(shippingData.length === 0)">
                    <td colspan="6">Tidak ada Data</td>
                </tr>
                <tr v-else v-for="(item , index) in shippingData" :key="index">
                    <th>{{ index + 1 }}</th>
                    <td>{{ item.first_name + " " + item.last_name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.phone_number }}</td>
                    <td>{{ item.address + " " + item.city }}</td>
                    <td>
                        <button class="btn btn-sm btn-warning mr-2 text-white" @click="$emit('shippingFunc', item)">Update</button>
                        <button class="btn btn-sm btn-danger" @click="deleteShippingFunc(item.id, index)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import shippingService from '../services/shippingService';


export default {
    name: 'ListTableComponent',

    methods: {
        getShipping() {
            shippingService.getAll().then(response => {
                this.shippingData = response.data;
                console.log(this.response.data);
            })
                .catch(e => {
                    console.log(e);
                })
        },
        deleteShippingFunc(id, index) {
            if (confirm("Apakah anda yakin hapus?")) {
                shippingService.deleteShipping(id)
                    .then( 
                        this.shippingData.splice(index,1)
                    )
                    .catch(e => {
                        console.log(e);
                    });
            } else {
                alert("Hapus dibatalkan!")
            }
        }
    },

    mounted() {
        this.getShipping();
    },

    data() {
        return {
            shippingData : null,
        };
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
