import { EvoProjectsType } from "@/type/EvoProjects";

import VigillareMobile from '@/../public/vigillare-mobile.jpg';
import VigillareGestor from '@/../public/gestor-vigitrack.png';
import VigillareMulti from '@/../public/gestor-multi.png';

export const EvoProjects: EvoProjectsType[] = [
    {
        image: VigillareMobile, 
        label_title: 'Vigillare Mobile',
        label_subtitle: 'Vigillare',
        description: 'Integração sistema de segurança dos clientes Vigillare ao aplicativo mobile. Armar e desarmar a central, acessar as imagens das câmeras, receber boleto e muito mais, tudo pelo aplicativo.'
    },
    {
        image: VigillareGestor, 
        label_title: 'Gestor de Vendas',
        label_subtitle: 'Vigitrack',
        description: 'Sistema de gestão comercial completo. Geração de orçamentos e contratos, gerenciamento da equipe de vendas, controle de comissionamento e ranking de vendas.'
    },
    {
        image: VigillareMulti, 
        label_title: 'Gestor Multi Filiais',
        label_subtitle: 'Vigillare',
        description: 'Sistema de gestão comercial e pós-vendas (multi filiais). Geração de orçamentos e contratos, gerenciamento da equipe de vendas, controle de comissionamento e ranking de vendas.'
    }
];
