export const estadoCivil = [
    {label: '---', value: null},
    { label: 'Casados', value: 'casados' },
    { label: 'Separados', value: 'separados' },
    { label: 'Divorciados', value: 'divorciados' },
    { label: 'Viúvo(a)', value: 'viuvo(a)' },
    { label: 'Outro', value: 'outro' }
]

export const guarda = [
    { label: 'Mãe', value: 'mãe' },
    { label: 'Pai', value: 'pai' },
    { label: 'Guarda Compartilhada', value: 'guarda compartilhada' },
    { label: 'Outro', value: 'outro' }
]

export const guardiaoLegal = [
    { label: 'Pais adotivos', value: 'pais adotivos' },
    { label: 'Pais de criação', value: 'pais de criação' },
    { label: 'Outros membros da família', value: 'outros membros da família' },
    { label: 'Instituição', value: 'instituição' }
]

export const condicoes = [
    {id: 'autismo_cg_21', label: 'Autismo', value: 'não', parentesco: ''},
    {id: 'defictAtencao_cg_22', label: 'Déficit de atenção', value: 'não', parentesco: ''},
    {id: 'convulsaoEpilepsia_cg_23', label: 'Convulsão ou epilepsia', value: 'não', parentesco: ''},
    {id: 'hiperatividade_cg_24', label: 'Hiperatividade', value: 'não', parentesco: ''},
    {id: 'difAprend_cg_25', label: 'Dificuldades de aprendizagem', value: 'não', parentesco: ''},
    {id: 'defIntelectual_cg_26', label: 'Deficiência intelectual', value: 'não', parentesco: ''},
    {id: 'tiques_cg_27', label: 'Tiques ou Síndrome de Tourette', value: 'não', parentesco: ''},
    {id: 'abusoAlcool_cg_28', label: 'Abuso de álcool', value: 'não', parentesco: ''},
    {id: 'usoDrogas_cg_29', label: 'Uso de drogas', value: 'não', parentesco: ''},
    {id: 'tentativaSuicidio_cg_30', label: 'Tentativa de suicídio', value: 'não', parentesco: ''},
    {id: 'abusoFisico_cg_31', label: 'Abuso físico', value: 'não', parentesco: ''},
    {id: 'probCompInfancia_cg_32', label: 'Problemas comportamentais na infância', value: 'não', parentesco: ''},
    {id: 'doencaMental_cg_33', label: 'Doença mental', value: 'não', parentesco: ''},
    {id: 'depressaoAnsiedade_cg_34', label: 'Depressão ou ansiedade', value: 'não', parentesco: ''},
    {id: 'abusoSexual_cg_35', label: 'Abuso sexual', value: 'não', parentesco: ''},
    {id: 'doencaNeurologica_cg_36', label: 'Doença ou enfermidade neurológica', value: 'não', parentesco: ''}
]

export const simOuNao = [{label: '---', value: null}, {label: 'Sim', value: 'sim'}, {label: 'Não', value: 'nao'}]

export const consistencias = [
    {id: 'solido', label: 'Sólido', value: 'não'},
    {id: 'liquido', label: 'Líquido', value: 'não'},
    {id: 'pastoso', label: 'Pastoso', value: 'não'}
]

export const problemaAlimentacao = [
    {id: 'alteracaoMastigacao', label: 'Alteração na mastigaçao', value: 'não'},
    {id: 'poucoApetite', label: 'Pouco apetite', value: 'não'},
    {id: 'voracidade', label: 'Voracidade', value: 'não'}
]

export const itensSignificantes = [
            {id: 'extrQuietoInativo', label: 'Extremamente quieto ou inativo', value: 'não'},
            {id: 'raramenteQuietoInativo', label: 'Raramente quieto ou inativo', value: 'não'},
            {id: 'excessInquieto', label: 'Excessivamente inquieto', value: 'não'},
            {id: 'naoColoAfago', label: 'Não gostava de colo ou afago', value: 'não'},
            {id: 'poucoAlerta', label: 'Pouco alerta', value: 'não'},
            {id: 'difAcalmar', label: 'Dificuldade para se acalmar', value: 'não'},
            {id: 'colicas', label: 'Cólicas', value: 'não'},
            {id: 'sonoExcess', label: 'Sono excessivo', value: 'não'},
            {id: 'poucoSono', label: 'Pouco Sono', value: 'não'},
            {id: 'batidasCabeca', label: 'Batidas na cabeça', value: 'não'},
            {id: 'incomodoSom', label: 'Incômodo com som', value: 'não'},
            {id: 'semNocaoPerigo', label: 'Sem noção do perigo', value: 'não'},
            {id: 'eploraTudoSempre', label: 'Explorava tudo o tempo todo', value: 'não'},
            {id: 'numeroAcidentesAcimaMedia', label: 'Excessivo número de acidentes em comparação com outras crianças', value: 'não'}
]

export const comportamentos = [
            {value: 'sorrir', label: 'Sorrir', idade:''},
            {value: 'rolar', label: 'Rolar', idade: ''},
            {value: 'sentarSemApoio', label: 'Sentar sem apoio', idade:''},
            {value: 'engatinhar', label: 'Engatinhar', idade:''},
            {value: 'andarSemApoio', label: 'Andar sem apoio', idade:''},
            {value: 'correr', label: 'Correr', idade:''},
            {value: 'balbuciar', label: 'Balbuciar', idade:''},
            {value: 'silabas', label: 'Sílabas', idade:''},
            {value: 'palavras', label: 'Palavras', idade:''},
            {value: 'frasesDuasPalavras', label: 'Frases com 2 palavras', idade:''},
            {value: 'amarrarCadarcos', label: 'Amarrar os cadarços', idade:''},
            {value: 'vestirSozinho', label: 'Vestir-se sozinho', idade:''},
            {value: 'comerSozinho', label: 'Comer sozinho', idade:''},
            {value: 'controleDiurnoUrina', label: 'Controle diurno da urina', idade:''},
            {value: 'controleNoturnoUrina', label: 'Controle noturno da urina', idade:''},
            {value: 'controleFezes', label: 'Controle de fezes', idade:''},
            {value: 'andarBicicleta', label: 'Andar de bicicleta', idade:''},
]