



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

    $.validator.addMethod("passwordLength", function (value, element) {
        var minLength =  8;
        return this.optional(element) || (value.length >= minLength);
    }, "Please enter at least an  8-character password.");

    $.validator.addMethod("passwordsMatch", function (value, element, params) {
        return value === $('#confirmPassword').val();
    }, "Passwords do not match. Please try again.");

    $.validator.addMethod("isAgeValid", function (value, element) {
        var role = $('input[name="role"]:checked').val().toLowerCase();
        if (role === "doctor" || role === "admin") {
            return true; // Skip age validation for Doctor and Admin roles
        }
        return this.optional(element) || (value >=  1 && value <=  120);
    }, "Please enter a valid age between  1 and  120.");

    $.validator.addMethod("isContactNumberValid", function (value, element) {
        var re = /^\d{10}$/;
        return this.optional(element) || re.test(value);
    }, "Contact number should be exactly  10 digits long.");

    $.validator.addMethod("isCheckboxChecked", function (value, element) {
        return $(element).is(':checked');
    }, "You must accept the terms and conditions to register.");

    $.validator.addMethod("validatePassword", function (value, element) {
        var hasUpperCase = /[A-Z]/.test(value);
        var hasLowerCase = /[a-z]/.test(value);
        var hasDigit = /\d/.test(value);
        var hasSpecialChar = /[!@#\$%\^&\*_]/.test(value);

        return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
    }, "Your password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");

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
            password: {
                required: true,
                passwordLength: true,
                validatePassword: true
            },
            confirmPassword: {
                required: true,
                equalTo: '#password'
            },
            age: {
                required: true,
                isAgeValid: true
            },
            phoneNumber: {
                required: true,
                isContactNumberValid: true
            },
            'policy input[type="checkbox"]': {
                required: true,
                isCheckboxChecked: true
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
                required: "Please confirm your password.",
                equalTo: "Passwords do not match."
            },
            age: {
                required: "Please enter your age."
            },
            phoneNumber: {
                required: "Please enter your phone number."
            },
            'policy input[type="checkbox"]': {
                required: "You must accept the terms and conditions to register."
            },
            gender: {
                required: "Please select your gender."
            },
            bloodGroup: {
                required: "Please select your blood group."
            }
        },
        onfocusout: function(element) {
            if ($(element).attr('name') === 'role') {
                var role = $('input[name="role"]:checked').val().toLowerCase();
                if (role === 'doctor' || role === 'admin') {
                    $('#age, #gender, #bloodGroup').prop('disabled', true);
                } else {
                    $('#age, #gender, #bloodGroup').prop('disabled', false);
                }
            }
        },
        submitHandler: function (form) {
            console.log("Form is valid.");
            form.submit();
        }
    });

    // Trigger the change event on page load to set the initial state
    $('input[name="role"]').trigger('change');
});

