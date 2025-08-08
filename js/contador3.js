function incrementarNumeroCircle({
            elementoId = 'contador-circle', 
            inicio = 0, 
            fin = 100, 
            paso = 1, 
            intervalo = 50
        } = {}) {
            let contador = inicio;
            const numero = document.getElementById(elementoId);
            const circulo = document.getElementById('progress-circle');
            
            if (!numero || !circulo) {
                console.warn('Elemento no encontrado');
                return;
            }

            // Calcular la circunferencia del círculo
            const radio = circulo.r.baseVal.value;
            const circunferencia = 2 *radio * Math.PI;
            
            // Configurar el círculo inicialmente
            circulo.style.strokeDasharray = `${circunferencia} ${circunferencia}`;
            circulo.style.strokeDashoffset = circunferencia;

            const timerUp = setInterval(() => {
                // Actualizar el número
                numero.textContent = `${contador}%`;
                
                // Calcular el progreso del círculo
                const progreso = contador / fin;
                const offset = circunferencia - (progreso * circunferencia);
                
                // Actualizar el círculo
                circulo.style.strokeDashoffset = offset;
                
                // Incrementar contador
                contador += paso;
                
                if (contador > fin) {
                    clearInterval(timerUp);
                }
            }, intervalo);
        }

        document.addEventListener("DOMContentLoaded", function() {
            incrementarNumeroCircle();  
        });