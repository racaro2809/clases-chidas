let texto = "En&un&mundo&tecnológico&en&constante&cambio,&la&innovación&es&clave&para&mantenerse&competitivo.&Empresas&de&todas&las&industrias&buscan&nuevas&formas&de&mejorar&la&eficiencia,&la&productividad&y&la&experiencia&del&cliente.&La&inteligencia&artificial&IA&ha&emergido&como&una&herramienta&valiosa,&capaz&de&analizar&grandes&cantidades&de&datos&y&extraer&ideas&significativas.&Mediante&el&aprendizaje&automático&y&las&redes&neuronales,&la&IA&puede&automatizar&tareas&rutinarias,&permitiendo&a&los&empleados&centrarse&en&tareas&más&estratégicas.&Además,&la&IA&está&transformando&sectores&como&la&medicina,&ayudando&a&diagnosticar&enfermedades&y&desarrollar&tratamientos&más&eficaces.&No&obstante,&surgen&desafíos&éticos&y&de&privacidad,&que&requieren&una&atención&cuidadosa.&En&resumen,&la&IA&está&moldeando&nuestro&futuro,&pero&su&implementación&debe&ser&responsable&y&bien&pensada.&Las&posibilidades&son&emocionantes,&pero&debemos&abordar&los&riesgos&con&sensatez.&La&colaboración&entre&humanos&y&máquinas&será&fundamental&para&lograr&un&mañana&mejor.&Es&una&nueva&era,&donde&la&creatividad&y&la&innovación&definirán&nuestra&evolución.&Preparémonos&para&abrazar&este&futuro&con&mente&abierta&y&valores&sólidos."

function separarEnArraY(textox) {
    return textox.split("&");

};

let text = separarEnArraY(texto);

console.log(text);