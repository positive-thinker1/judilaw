
  <template>
  <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
export default {
  middleware: ["auth"],
  data() {
    return {
      data: [
        {
          id: 1,
          name: "Jesse",
          age: "30",
          gender: "Male",
          qualification: "BA.BL",
          address: "madurai",
          phonenumber: "9988776655",
          emailid: "lkjh@gmail.com",
          password: "12344",
          "working status": "",
          experience: "",
          "bar council enrolment number": ""
        },
        {
          id: 2,
          name: "John",
          age: "30",
          gender: "Male",
          qualification: "BA.BL",
          address: "madurai",
          phonenumber: "9988776655",
          emailid: "lkjh@gmail.com",
          password: "12344",
          "working status": "",
          experience: "",
          "bar council enrolment number": ""
        },
        {
          id: 3,
          name: "Tina",
          age: "30",
          gender: "Male",
          qualification: "BA.BL",
          address: "madurai",
          phonenumber: "9988776655",
          emailid: "lkjh@gmail.com",
          password: "12344",
          "working status": "",
          experience: "",
          "bar council enrolment number": ""
        },
        {
          id: 4,
          name: "Clarence",
          age: "30",
          gender: "Male",
          qualification: "BA.BL",
          address: "madurai",
          phonenumber: "9988776655",
          emailid: "lkjh@gmail.com",
          password: "12344",
          "working status": "",
          experience: "",
          "bar council enrolment number": ""
        },
        {
          id: 5,
          name: "Anne",
          age: "30",
          gender: "Male",
          qualification: "BA.BL",
          address: "madurai",
          phonenumber: "9988776655",
          emailid: "lkjh@gmail.com",
          password: "12344",
          "working status": "",
          experience: "",
          "bar council enrolment number": ""
        }
      ],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true
        },
        {
          field: "name",
          label: " Name"
        },
        {
          field: "age",
          label: "Age",
          width: "40",
          numeric: true
        },

        {
          field: "gender",
          label: "Gender"
        },
        {
          field: "qualification",
          label: "Qualification"
        },
        {
          field: "address",
          label: "Address"
        },
        {
          field: "phone number",
          label: "Phone Number",
          width: "40",
          numeric: true
        },
        {
          field: "email id",
          label: "Email Id",
          centered: true
        },
        {
          field: "password",
          label: "Password",
          centered: true
        },
        {
          field: "working status",
          label: "working Status"
        },
        {
          field: "experience",
          label: "Experience"
        },
        {
          field: "bar council enrolment number",
          label: "Bar Council Enrolment Number"
        }
      ]
    };
  }
};
</script>
