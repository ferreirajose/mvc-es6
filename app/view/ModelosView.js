import { View } from './View';

export class ModelosView extends View {
    
    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        /*
        gambiarra para verificar se model.modelos não é 'undefined', 
        se model.modelos for 'undefined' model.modelos recebe um array vazio
        */
        //model.modelos = (typeof model.modelos !== 'undefined') ? model.modelos : []; 
        // if (typeof model.modelos === 'undefined') {
        //     model.modelos = [];

        // } else {

        //     model.modelos = model.modelos;
        // }

        let template = `

            ${model.modelos.map(modelo => `
                <div class="card card-cascade">
                    <!--Card image-->
                    <div class="view overlay hm-white-slight">
                        <img src="${modelo.getFoto}" class="img-fluid" alt="">
                        <a>
                            <div class="mask waves-effect waves-light"></div>
                        </a>
                    </div>
                    <!--/.Card image-->
    
                    <!--Card content-->
                    <div class="card-body text-center">
                        <!--Title-->
                        <h4 class="card-title"><strong>${modelo.getNome}</strong></h4>
                        <h5>Data: ${modelo.getIdade}</h5>
    
                        <p class="card-text">${modelo.getDescricao}</p>
                        
                        <!--Facebook-->
                        <a type="button" class="btn-floating btn-small btn-fb waves-effect waves-light"><i class="fa fa-facebook"></i></a>
                        <!--Twitter-->
                        <a type="button" class="btn-floating btn-small btn-tw waves-effect waves-light"><i class="fa fa-twitter"></i></a>
                        <!--Google +-->
                        <a type="button" class="btn-floating btn-small btn-dribbble waves-effect waves-light"><i class="fa fa-dribbble"></i></a>

                        <ul>
                            ${modelo.getServicos.map(servico => `
                                <li>
                                    <span class="label">${servico.nome}</span>
                                    <span class="label label-default">${servico.valor}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    <!--/.Card content-->
                </div>
            `).join('')}`;

        return template;
    };

}