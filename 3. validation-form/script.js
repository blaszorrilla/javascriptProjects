$(document).ready(function() {
  $("#basic-form").validate({
    rules: {
      name : {
        required: true,
        minlength: 3
      },
      age: {
        required: true,
        number: true,
        min: 18
      },
      email: {
        required: true,
        email: true
      },
      weight: {
        required: {
          depends: function(elem) {
            return $("#age").val() > 50
          }
        },
        number: true,
        min: 0
      }
    },
    messages : {
      name: {
        minlength: "Nombre debe tener al menos 3 caracteres"
      },
      age: {
        required: "Por favor ingresa tu edad",
        number: "Ingresa tu edad con un valor numérico",
        min: "Tu edad debe ser mínimo de 18 años"
      },
      email: {
        email: "Tu email debe tener este formato: nombre@dominio.com"
      },
      weight: {
        required: "Las personas mayores de 50 años deben ingresar su peso",
        number: "Ingresa tu peso con un valor numérico"
      }
    }
  });
});