 
// function nameIsValid(nameInput) {
//     var re = /^[a-zA-Z\s]+$/; // Allowing spaces in the name
//     return re.test(nameInput.value);
// }
//     function emailIsValid(emailInput) {
//     var re = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z]{2,})+$/;
//     return re.test(emailInput.value);
//     }
//     function validateEmail(emailInput) {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(emailInput.value);
//     }
//     function validatePasswordLength(passwordInput) {
//         var minLength = 8;
//         var password = passwordInput.value; // Fix: Get the value of the passwordInput
   
//         var hasUpperCase = /[A-Z]/.test(password);
//         var hasLowerCase = /[a-z]/.test(password);
//         var hasDigit = /\d/.test(password);
//         var hasSpecialChar = /[!@#\$%\^&\*_]/.test(password);
   
//         if (!hasUpperCase) {
//             alert("Your password must contain at least one uppercase letter.");
//             return false;
//         }
   
//         if (!hasLowerCase) {
//             alert("Your password must contain at least one lowercase letter.");
//             return false;
//         }
   
//         if (!hasDigit) {
//             alert("Your password must contain at least one digit.");
//             return false;
//         }
   
//         if (!hasSpecialChar) {
//             alert("Your password must contain at least one special character.");
//             return false;
//         }
   
//         if (password.length < minLength) { // Fix: Check the length of the password
//             alert("Your Password must be at least 8 characters");
//             return false;
//         }
   
//         return true;
//     }
//     function passwordsMatch(passwordInput, confirmPasswordInput) {
//     return passwordInput.value === confirmPasswordInput.value;
//     }
 
//     function isAgeValid(ageInput, role) {
//     if (role === "doctor" || role === "admin") {
//     return true; // Skip age validation for Doctor and Admin roles
//     }
//     return ageInput.value >= 1 && ageInput.value <= 120;
//     }
 
 
//     function isContactNumberValid(contactNumberInput) {
//         var re = /^(\+\d{1,4})?(\d{10})$/;
//         return re.test(contactNumberInput.value);
//     }
   
//     function isCheckboxChecked(checkbox) {
//     return checkbox.checked;
//     }
 
 
   
//     function enableFields() {
//     document.getElementById("age").disabled = false;
//     document.getElementById("bloodGroup").disabled = false;
//     document.getElementById("gender").disabled = false;
//     document.getElementById("address").disabled = false;
//     }
//     function disableFields() {
//     document.getElementById("age").disabled = true;
//     document.getElementById("bloodGroup").disabled = true;
//     document.getElementById("gender").disabled = true;
//     document.getElementById("address").disabled = true;
   
//     }
 
//     function disab()
//     {
//         if((role === "user" || role === "admin"))
//         {
//             disableFields()
//             {
//                 document.getElementById("speciality").disable = true;
//             };
 
//         }
//         else{
//             enableFields();
//         }
//     }
 
//     function handleSubmit(event) {
//     event.preventDefault();
//     var nameInput = document.querySelector('#name');
//     var emailInput = document.querySelector('#email');
//     // var password= document.querySelector('#password');
//     var passwordInput = document.querySelector('#password');
//     var confirmPasswordInput = document.querySelector('#confirmPassword');
 
   
//     var ageInput = document.querySelector('#age');
//     var contactNumberInput = document.querySelector('#phoneNumber');
//     var checkbox = document.querySelector('.policy input[type="checkbox"]');
//     var role = document.querySelector('input[name="role"]:checked').value.toLowerCase();
//     if (!nameIsValid(nameInput)) {
//     alert('Please enter a valid name.');
//     return;
//     }
//     // if(!validatePassword(password))
//     // {
//     //     alert('Please enter a the correct password');
//     //     return;
 
//     // }
//     if (!isAgeValid(ageInput, role)) {
//     alert('Please enter a valid age between 1 and 120.');
//     return;
//     }
//     if (!validateEmail(emailInput)) {
//     alert('Please enter a valid email address.');
//     return;
//     }
//     if (!validatePasswordLength(passwordInput)) {
//     alert('Please enter at least an 8-character password.');
//     return;
//     }
//     if (!passwordsMatch(passwordInput, confirmPasswordInput)) {
//     alert('Passwords do not match. Please try again.');
//     return;
//     }
//     if (!isContactNumberValid(contactNumberInput)) {
//     alert('Contact number should be exactly 10 digits long.');
//     console.error('Please enter a valid contact number');
//     return;
//     }
//     if (!isCheckboxChecked(checkbox)) {
//     alert('You must accept the terms and conditions to register.');
//     return;
//     }
//     console.log("Form is valid.");
   
//     event.target.reset();
//     // You can uncomment the line below if you want to actually submit the form
//     // document.getElementById("registrationForm").submit();
//     }
//     document.getElementById("registrationForm").addEventListener("submit", handleSubmit);
 
   
 
 
/*
 
$(document).ready(function () {
    // Convert your existing functions into jQuery validation methods
    $.validator.addMethod("nameIsValid", function (value, element) {
        var re = /^[a-zA-Z\s]+$/; // Allowing spaces in the name
        return this.optional(element) || re.test(value);
    }, "Please enter a valid name.");
 
    $.validator.addMethod("emailIsValid", function (value, element) {
        var re = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z]{2,})+$/;
        return this.optional(element) || re.test(value);
    }, "Please enter a valid email address.");
 
    $.validator.addMethod("validatePasswordLength", function (value, element) {
        var hasDigit = /\d/.test(value);
        return this.optional(element) && value.length >=   6 && hasDigit;
    }, "Password must be at least   6 characters long and contain at least one digit.");
 
    $.validator.addMethod("passwordsMatch", function (value, element) {
        var confirmPassword = $("#confirmPassword").val();
        return this.optional(element) || value === confirmPassword;
    }, "Passwords do not match.");
 
    $.validator.addMethod("isAgeValid", function (value, element) {
        var role = $("input[name='role']:checked").val().toLowerCase();
        if (role === "doctor" || role === "admin") {
            return true; // Skip age validation for Doctor and Admin roles
        }
        return this.optional(element) || (value >=  1 && value <=  120);
    }, "Please enter a valid age between  1 and  120.");
 
    $.validator.addMethod("isContactNumberValid", function (value, element) {
        var re = /^(\+\d{1,4})?(\d{10})$/;
        return this.optional(element) || re.test(value);
    }, "Please enter a valid contact number.");
 
    $.validator.addMethod("isCheckboxChecked", function (value, element) {
        return this.optional(element) || $(element).is(":checked");
    }, "You must accept the terms and conditions to register.");
 
    // Apply the validation rules to your form fields
    $("#registrationForm").validate({
        rules: {
            name: {
                required: true,
                nameIsValid: true
            },
            email: {
                required: true,
                emailIsValid: true
            },
            password: {
                required: true,
                validatePasswordLength: true
            },
            confirmPassword: {
                required: true,
                passwordsMatch: true
            },
            age: {
                required: true,
                isAgeValid: true
            },
            phoneNumber: {
                required: true,
                isContactNumberValid: true
            },
            policy: {
                required: true,
                isCheckboxChecked: true
            },
            speciality: {
                required: function (element) {
                    return $('input[name="role"]:checked').val().toLowerCase() === 'user' ||
                        $('input[name="role"]:checked').val().toLowerCase() === 'admin';
                },
                minlength:  2
            },
            gender: {
                required: true
            },
            bloodGroup: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name."
            },
            email: {
                required: "Please enter your email address."
            },
            password: {
                required: "Please enter your password."
            },
            confirmPassword: {
                required: "Please confirm your password."
            },
            age: {
                required: "Please enter your age."
            },
            phoneNumber: {
                required: "Please enter your phone number."
            },
            policy: {
                required: "Please accept the terms and conditions."
            },
            speciality: {
                required: "Please enter your speciality.",
                minlength: "Please enter at least  2 characters."
            },
            gender: {
                required: "Please select your gender."
            },
            bloodGroup: {
                required: "Please select your blood group."
            }
        },
        submitHandler: function (form) {
            $("#submit1").prop("disabled", false);
            form.submit();
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            $(element.form).find("label[for=" + element.id + "]").addClass(errorClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
            $(element.form).find("label[for=" + element.id + "]").removeClass(errorClass);
        }
    });
 
    $('input[name="role"]').change(function () {
        var role = $(this).val().toLowerCase();
        if (role === 'user' || role === 'admin') {
            // Additional validation for user and admin roles
            $("#speciality").rules("add", {
                required: true,
                minlength:  2,
                messages: {
                    required: "Please enter your speciality.",
                    minlength: "Please enter at least  2 characters."
                }
            });
        } else {
            // Remove validation for other roles
            $("#speciality").rules("remove");
        }
 
        if (role === 'doctor' || role === 'admin') {
            // Disable the age, gender, and blood group fields
            $('#age, #gender, #bloodGroup').prop('disabled', true);
        } else {
            // Enable the age, gender, and blood group fields
            $('#age, #gender, #bloodGroup').prop('disabled', false);
        }
    });
 
    // Disable the submit button initially
    $("#submit1").prop("disabled", true);
 
    // Trigger validation on keyup and change events
    $("#registrationForm").on("keyup change", function () {
        $("#registrationForm").valid();
    });
 
    // Additional event to disable the submit button if the form is not valid
    $("#submit1").on("click", function (event) {
        if (!$("#registrationForm").valid()) {
            event.preventDefault();
            $("#submit1").prop("disabled", true);
            disableFields();
        }
    });
});
 
 
 
*/
document.addEventListener('DOMContentLoaded', function() {
    // This function checks if the user is already logged in
    function checkIfLoggedIn() {
        // Replace this with your actual logic to check if the user is logged in
        // For example, checking for a token in local storage
        var isLoggedIn = localStorage.getItem('access_token');
 
        if (isLoggedIn) {
            // If the user is logged in, redirect them to the home page
            redirectToHomePage();
        }
    }
 
    // This function redirects the user to the home page and displays a message
    function redirectToHomePage() {
        // Redirect to the home page
        window.location.href = 'index.html';
 
        // Optionally, display a message to the user
        // This could be done using a modal, an alert, or any other method you prefer
        // alert('You have already registered. Redirecting to the home page.');
    }
 
    // Call the function to check if the user is logged in
    checkIfLoggedIn();
});


$(document).ready(function () {
    $(".toggle-password").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash"); // toggle our eye slash icon
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
});

 
function enableFields(){
    document.getElementById('bloodGroup').style.display = 'block';
    document.getElementById('gender').style.display = 'block';
    document.getElementById('age').style.display = 'block';
}
function disableFields() {
    document.getElementById('bloodGroup').style.display = 'none';
    document.getElementById('gender').style.display = 'none';
    document.getElementById('age').style.display = 'none';
}
 
$(document).ready(function () {
 
 
   
    // Custom validation methods
    $.validator.addMethod("nameIsValid", function (value, element) {
        var re = /^[a-zA-Z\s]+$/; // Allowing spaces in the name
        return this.optional(element) || re.test(value);
    }, "Please enter a valid name.");
 
    $.validator.addMethod("emailIsValid", function (value, element) {
        

        var re = /^[a-zA-Z][-a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return this.optional(element) || re.test(value);
    }, "Please enter a valid email address.");
 
    $.validator.addMethod("passwordLength", function (value, element) {
        var minLength = 8;
        return this.optional(element) || (value.length >= minLength);
    }, "Please enter at least an 8-character password.");
 
    $.validator.addMethod("passwordsMatch", function (value, element, params) {
        return value === $('#confirmPassword').val();
    }, "Passwords do not match. Please try again.");
 
 
    $.validator.addMethod("validatePassword", function (value, element) {
        var hasUpperCase = /[A-Z]/.test(value);
        var hasLowerCase = /[a-z]/.test(value);
        var hasDigit = /\d/.test(value);
        var hasSpecialChar = /^(?=.*[!@#\$%\^&\*_])(?!.*[==<>-]).*$/.test(value);
 
        return hasUpperCase && hasDigit && hasSpecialChar;
    }, "Your password must contain at least one uppercase letter, one digit, and one special character.");
 
    $.validator.addMethod("genderIsValid", function (value, element) {
        return value !== "Unknown"; // Ensure the selected value is not "Unknown"
    }, "Please select your gender.");
 
    $.validator.addMethod("bloodGroupIsValid", function (value, element) {
        return value !== "Unknown"; // Ensure the selected value is not "Unknown"
    }, "Please select your blood group.");
 
    $.validator.addMethod("isAgeValid", function (value, element) {
        var role = $('input[name="role"]:checked').val().toLowerCase();
        if (role === "2" || role === "1") {
            return true; // Skip age validation for Doctor and Admin roles
        }
        return this.optional(element) || (value >= 1 && value <= 120);
    }, "Please enter a valid age between 1 and 120.");
 
    $.validator.addMethod("isContactNumberValid", function (value, element) {
        var re = /^\d{10}$/;
        return this.optional(element) || re.test(value);
    }, "Contact number should be exactly 10 digits long.");
 
    $.validator.addMethod("isCheckboxChecked", function (value, element) {
        return $(element).is(':checked');
    }, "You must accept the terms and conditions to register.");
 
    // Attach the validator to the form
    $('#registrationForm').validate({
        rules: {
            name: {
                required: true,
                nameIsValid: true
            },
            email: {
                required: true,
                emailIsValid: true
            },
            pwd: {
                required: true,
                passwordLength: true,
                validatePassword: true
            },
            confirmPassword: {
                required: true,
                equalTo: '#pwd'
            },
            gender: {
                required: true,
                genderIsValid: true
            },
            bloodGroup: {
                required: true,
                bloodGroupIsValid: true
            },
            age: {
                required: true,
                isAgeValid: true
            },
            ph_no: {
                required: true,
                isContactNumberValid: true
            },
            'termsCondition': {
                required: true,
                isCheckboxChecked: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name."
            },
            email: {
                required: "Please enter your email address."
            },
            pwd: {
                required: "Please enter your password."
            },
            confirmPassword: {
                required: "Please confirm your password.",
                equalTo: "Passwords do not match."
            },
            age: {
                required: "Please enter your age."
            },
            ph_no: {
                required: "Please enter your phone number."
            },
            gender: {
                required: "Please select your gender."
            },
            bloodGroup: {
                required: "Please select your blood group."
            },
            'termsCondition': {
                required: "You must accept the terms and conditions to register."
            }
        },
        submitHandler: function (form) {
            // Serialize form data to JSON
            const formData = new FormData(form);
            const jsonData = {};
            for (const [key, value] of formData.entries()) {
                jsonData[key] = value;
            }
 
            // Convert the JSON object to a string
            const jsonString = JSON.stringify(jsonData);
 
            // Send the JSON data using fetch
            fetch('http://127.0.0.1:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonString
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the response as JSON
            })
            .then(data => {
                // On successful submission, show a success alert and then redirect to the login page
                Swal.fire({
                    title: 'Registered Successful',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    // Redirect to the login page after the user clicks the OK button
                    window.location.href = 'Login.html';
                });
            })
            .catch(error => {
                // Handle any errors here
                console.error('There has been a problem with your fetch operation:', error);
                document.getElementById('error-message').textContent = 'Email already exists.';

            });
        }
    });
});