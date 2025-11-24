// Exemplo simplificado (completo na resposta anterior)
window.TagoIO.onRealtime((widget) => {
    const content = document.getElementById('widget-container');
    const flag_data = widget.data.find(item => item.variable === 'habilita_flag');

    if (content && flag_data) {
        const flag_value = Number(flag_data.value);
        
        // Controla a visibilidade
        content.style.display = (flag_value === 1) ? 'block' : 'none'; 
    }
});

window.TagoIO.onStart((widget) => {
    // É essencial repetir a lógica aqui para o carregamento inicial.
    // ... (Lógica idêntica ao onRealtime)
});

window.TagoIO.ready();
