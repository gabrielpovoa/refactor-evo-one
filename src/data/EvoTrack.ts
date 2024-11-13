import React from "react";

import { EvoTrackType } from "@/type/EvoTrackType";
import { Bot, Car, Computer } from "lucide-react";

export const EvoTrack: EvoTrackType[] = [
    {
        icon: React.createElement(Computer), 
        label_title: 'Plataforma Web',
        description: 'Sistema totalmente em nuvem, projetado para clientes que demandas de relatórios e controle de frotas, mas, não deixa de atender aquele que precisa rastrear o seu veiculo pessoal.'
    },
    {
        icon: React.createElement(Bot), 
        label_title: 'Android e IOS',
        description: 'Aplicativos Android e IOS desenhado nas cores da empresa, permitir o cliente acompanhar TODOS seus veículos, analisar percurso, verificar paradas e muito mais.'
    },
    {
        icon: React.createElement(Car), 
        label_title: 'Disponibilizamos Rastreadores',
        description: 'Não há necessidade de compra dos rastreadores, assim, como TODA a plataforma, os rastreadores também são disponibilizados pela EVO ONE.'
    }
];
