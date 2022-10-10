import { reactive } from 'vue'

export const store = reactive({
    requerimientos: [
        {
            "key": "ph",
            "label": "pH",
            "type": "text",
            "value": "5.5"
        },
        {
            "key": "textura-de-suelo",
            "label": "Textura de suelo",
            "type": "select",
            "options": [
                { "value": "franco", "label": "Franco" },
                { "value": "arenoso", "label": "Arenoso" },
                { "value": "archilloso", "label": "Arcilloso" },
                { "value": "limoso", "label": "Limoso" },
                { "value": "franco-arenoso", "label": "Franco arenoso" },
                { "value": "franco-arcilloso", "label": "Franco arcilloso" },
                { "value": "franco-limoso", "label": "Franco limoso" }
            ],
            "value": "franco-arenoso"
        },
        {
            "key": "cic",
            "label": "CIC",
            "type": "text",
            "value": "200"
        },
        {
            "key": "n",
            "label": "Nitrógeno (N)",
            "type": "text",
            "value": "51.5"
        },
        {
            "key": "p",
            "label": "Fósforo (P)",
            "type": "text",
            "value": "20.6"
        },
        {
            "key": "k",
            "label": "Potasio (K)",
            "type": "text",
            "value": "93.8"
        },
        {
            "key": "ca",
            "label": "Calcio (Ca)",
            "type": "text",
            "value": "1.7"
        },
        {
            "key": "s",
            "label": "Azufre (S)",
            "type": "text",
            "value": "6.9"
        },
        {
            "key": "mg",
            "label": "Magnesio (Mg)",
            "type": "text",
            "value": "5.9"
        },
        {
            "key": "mn",
            "label": "Manganeso (Mn)",
            "type": "text",
            "value": "1"
        },
        {
            "key": "b",
            "label": "Boro (B)",
            "type": "text",
            "value": "1.2"
        },
        {
            "key": "fe",
            "label": "Hierro (Fe)",
            "type": "text",
            "value": "0.3"
        },
        {
            "key": "al",
            "label": "Aluminio (Al)",
            "type": "text",
            "value": "-"
        }              
    ],
      cic:0,
      n:0,
      p:0,
      k:0,
      mg:0,
      ca:0,
      s:0,
      mn:0,
      fe:0,
      al:0,
      b:0,
      ph:0.0,
      tx:0.0
})