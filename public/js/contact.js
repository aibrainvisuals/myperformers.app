$(document).ready(function(){
    
    (function($) {
//        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "come on, you have a subject, don't you?",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "The message must consist of at least 20 characters"
                }
            },
            submitHandler: function(form) {
                $('#btn-submit').attr('disabled','disabled');
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"https://hashgrow.com/contact_process.php",
                    success: function(data) {
                        console.log('Submission was successful.');
                        console.log(data);
                         $("#contactForm")[0].reset();
                         $("#successMessage").show().delay(3000).fadeOut();
                         $('#btn-submit').removeAttr('disabled');
                    },
                    error: function(data) {
                        console.log('An error occurred.');
                        console.log(data);
                        $('#btn-submit').removeAttr('disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    },
                })
            }
        })
    })
        
 })(jQuery)
})