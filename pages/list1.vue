
<template>
    <section>
        <b-field grouped group-multiline>
            <b-select v-model="defaultSortDirection">
                <option value="asc">default sort direction: ASC</option>
                <option value="desc">default sort direction: DESC</option>
            </b-select>
            <b-select v-model="perPage" :disabled="!isPaginated">
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="15">15 per page</option>
                <option value="20">20 per page</option>
            </b-select>
            <div class="control">
                <button class="button" @click="currentPage = 2" :disabled="!isPaginated">Set page to 2</button>
            </div>
            <div class="control is-flex">
                <b-switch v-model="isPaginated">Paginated</b-switch>
            </div>
            <div class="control is-flex">
                <b-switch v-model="isPaginationSimple" :disabled="!isPaginated">Simple pagination</b-switch>
            </div>
            <b-select v-model="paginationPosition" :disabled="!isPaginated">
                <option value="bottom">bottom pagination</option>
                <option value="top">top pagination</option>
                <option value="both">both</option>
            </b-select>
            
        </b-field>

        <b-table
            :data="data"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :pagination-position="paginationPosition"
            :default-sort-direction="defaultSortDirection"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            default-sort="user.name"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

            <template slot-scope="props">
                <b-table-column field="id" label="ID" width="40" sortable numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="user.name" label="Name" sortable>
                    {{ props.row.user.name }}
                </b-table-column>

                <b-table-column field="user.address" label="Address" sortable>
                    {{ props.row.user.address }}
                </b-table-column>

                <b-table-column field="phone number" label="Phone Number" sortable centered>
                    
                       {{ props.row.user.phonenumber }} 
                </b-table-column>       
                <b-table-column field="user.emailid" label="Email Id" sortable>
                    {{ props.row.user.emailid }}
                </b-table-column>
                <b-table-column field="user.password" label="Password" sortable>
                    {{ props.row.user.password }}
                </b-table-column>

                
            </template>
        </b-table>
    </section>
</template>

<script>
    //const data = require('@/data/sample.json')
const data = [{"id":1,"user":{"name":"Jesse"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":2,"user":{"name":"John"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":3,"user":{"name":"Tina"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":4,"user":{"name":"Clarence"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":5,"user":{"name":"Anne"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":6,"user":{"name":"Sara"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":7,"user":{"name":"Anthony"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":8,"user":{"name":"Andrew"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":9,"user":{"name":"Russell"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":10,"user":{"name":"Lori"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":11,"user":{"name":"Ronald"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":12,"user":{"name":"Michael"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":13,"user":{"name":"George"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":14,"user":{"name":"Eric"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":15,"user":{"name":"Juan"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":16,"user":{"name":"Lori"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":17,"user":{"name":"Lori"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":18,"user":{"name":"Charles"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":19,"user":{"name":"Henry"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":20,"user":{"name":"Albert"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":21,"user":{"name":"Ruby"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":22,"user":{"name":"Jesse"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":23,"user":{"name":"Carlos"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":24,"user":{"name":"Melissa"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":25,"user":{"name":"Arthur"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":26,"user":{"name":"Joe"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":27,"user":{"name":"Joseph"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":28,"user":{"name":"Sarah"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":29,"user":{"name":"Christopher"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":30,"user":{"name":"Alan"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":31,"user":{"name":"James"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":32,"user":{"name":"Scott"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":33,"user":{"name":"Mildred"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":34,"user":{"name":"Victor"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":35,"user":{"name":"Susan"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":36,"user":{"name":"Judy"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":37,"user":{"name":"Joan"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":38,"user":{"name":"Rachel"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":39,"user":{"name":"Roger"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":40,"user":{"name":"Dorothy"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":41,"user":{"name":"Eugene"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":42,"user":{"name":"Kathy"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":43,"user":{"name":"Antonio"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":44,"user":{"name":"Louis"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":45,"user":{"name":"Andrea"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":46,"user":{"name":"Eugene"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":47,"user":{"name":"Mildred"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":48,"user":{"name":"Joan"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":49,"user":{"name":"Jesse"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":50,"user":{"name":"David"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":51,"user":{"name":"Nicholas"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":52,"user":{"name":"Douglas"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":53,"user":{"name":"Bruce"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":54,"user":{"name":"Antonio"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":55,"user":{"name":"Chris"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":56,"user":{"name":"Ashley"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":57,"user":{"name":"Alan"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":58,"user":{"name":"George"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":59,"user":{"name":"Frank"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"},
{"id":60,"user":{"name":"Christopher"}, "address":"madurai", "phonenumber":"9988776655", "emailid":"ssddd@gmail.com",  "password":"12345"}]

  export default  {
    data() {
        return {
            data,
            isPaginated: true,
            isPaginationSimple: false,
            paginationPosition: 'bottom',
            defaultSortDirection: 'asc',
            sortIcon: 'arrow-up',
            sortIconSize: 'is-small',
            currentPage: 1,
            perPage: 5
        }
    }
}
 

          
</script>
