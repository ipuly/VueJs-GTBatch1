<template>
    <div>
        <div class="row justify-content-center my-5">
            <div class="col-6 border-pink p-5 rounded" id="div-shipping">
                <h2 class="text-center mb-4">Shipping Form</h2>
                <form id="form-shipping">
                    <div class="form-row">
                        <div class="form-group col-6">
                            <label for="InputFirstName">First Name</label>
                            <input type="text" class="form-control" id="InputFirstName"
                                placeholder="Enter your first name" required />
                        </div>
                        <div class="form-group col-6">
                            <label for="InputPassword">Phone number</label>
                            <input type="text" class="form-control" id="InputPassword"
                                placeholder="Enter phone number" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-6">
                            <label for="InputLastName">Last name</label>
                            <input type="text" class="form-control" id="InputLastName"
                                placeholder="Enter your last name" required />
                        </div>
                        <div class="form-group col-6">
                            <label for="InputCity">City</label>
                            <input type="text" class="form-control" id="InputCity" placeholder="Enter city" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-6">
                            <label for="InputEmail">Email address</label>
                            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp"
                                placeholder="Enter Email" />
                        </div>
                        <div class="form-group col-6">
                            <label for="InputPostal">Postal Code</label>
                            <input type="postal" class="form-control" id="InputPostal"
                                placeholder="Enter postal code" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-12">
                            <label for="InputAddress">Address</label>
                            <textarea type="text" class="form-control" id="InputAddress" aria-describedby="addressHelp"
                                placeholder="Enter address" required></textarea>
                        </div>

                        <div class="form-group col-12">
                            <button type="submit" class="btn rounded bg-pink">Submit</button>
                        </div>
                    </div>
                </form>
            </div>

            <!-- Checkout -->
            <div class="d-none" id="result">
                <h4></h4>
                <p></p>
                <button type="submit" class="btn-submit bg-pink border-0 py-2 px-3">Back</button>
            </div>

        </div>
        <!-- End Content Section -->
    </div>
</template>

<script>

export default {
    name: 'FormComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
