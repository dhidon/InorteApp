export const listaEstadoCivil = [
    {label: '---', value: null},
    { label: 'Casados', value: 'casados' },
    { label: 'Separados', value: 'separados' },
    { label: 'Divorciados', value: 'divorciados' },
    { label: 'Viúvo(a)', value: 'viuvo(a)' },
    { label: 'Outro', value: 'outro' }
]

export const guarda = [
    {label: '---', value: null},
    { label: 'Mãe', value: 'mãe' },
    { label: 'Pai', value: 'pai' },
    { label: 'Guarda Compartilhada', value: 'guarda compartilhada' },
    { label: 'Outro', value: 'outro' }
]

export const listaGuardiaoLegal = [
    {label: '---', value: null},
    { label: 'Pais adotivos', value: 'pais adotivos' },
    { label: 'Pais de criação', value: 'pais de criação' },
    { label: 'Outros membros da família', value: 'outros membros da família' },
    { label: 'Instituição', value: 'instituição' }
]

export const condicoes = [
    {id: 'autismo', label: 'Autismo', value: 'não', parentesco: ''},
    {id: 'defictAtencao', label: 'Déficit de atenção', value: 'não', parentesco: ''},
    {id: 'convulsaoEpilepsia', label: 'Convulsão ou epilepsia', value: 'não', parentesco: ''},
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

export const consistenciasAceitas = [
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

export const condicoesFilho = [
    { id: 'oites', label: 'Oites', value: 'não' },
    { id: 'sarampo', label: 'Sarampo', value: 'não' },
    { id: 'rubeola', label: 'Rubéola', value: 'não' },
    { id: 'caxumba', label: 'Caxumba', value: 'não' },
    { id: 'catapora', label: 'Catapora', value: 'não' },
    { id: 'coqueluxe', label: 'Coqueluche', value: 'não' },
    { id: 'difteria', label: 'Difteria', value: 'não' },
    { id: 'meningite', label: 'Meningite', value: 'não' },
    { id: 'pneumonia', label: 'Pneumonia', value: 'não' },
    { id: 'encefalite', label: 'Encefalite', value: 'não' },
    { id: 'febreAlta', label: 'Febre alta', value: 'não' },
    { id: 'convulsao', label: 'Convulsão', value: 'não' },
    { id: 'alergia', label: 'Alergia', value: 'não' },
    { id: 'ferimentosCabeca', label: 'Ferimentos na cabeça', value: 'não' },
    { id: 'fraturas', label: 'Fraturas', value: 'não' },
    { id: 'hospitalizacoes', label: 'Hospitalizações', value: 'não' },
    { id: 'cirurgias_Condicoes', label: 'Cirurgias', value: 'não' },
    { id: 'paralisias', label: 'Paralisias', value: 'não' },
    { id: 'perdaConsciencia', label: 'Perda de consciência', value: 'não' },
    { id: 'envenenamento', label: 'Envenenamento', value: 'não' },
    { id: 'dorCabecaSevera', label: 'Dores de cabeça severas', value: 'não' },
    { id: 'febreReumatica', label: 'Febre reumática', value: 'não' },
    { id: 'tuberculose', label: 'Tuberculose', value: 'não' },
    { id: 'doencasOsseas', label: 'Doenças ósseas ou articulares', value: 'não' },
    { id: 'ists', label: 'ISTs', value: 'não' },
    { id: 'anemia', label: 'Anemia', value: 'não' },
    { id: 'ictericia', label: 'Icterícia', value: 'não' },
    { id: 'diabetes', label: 'Diabetes', value: 'não' },
    { id: 'cancer', label: 'Câncer', value: 'não' },
    { id: 'hipertensao', label: 'Hipertensão arterial', value: 'não' },
    { id: 'doencaCardiaca', label: 'Doença cardíaca', value: 'não' },
    { id: 'hemorragia', label: 'Hemorragia', value: 'não' },
    { id: 'eczema', label: 'Eczemas ou picadas', value: 'não' },
    { id: 'abusoFisico', label: 'Abuso físico', value: 'não' },
    { id: 'abusoSexual', label: 'Abuso sexual', value: 'não' },
    { id: 'hepatite', label: 'Hepatite', value: 'não' }
]

export const fatoresDif = [
    { id: 'doencas', label: 'Doenças', value: 'não' },
    { id: 'mortes', label: 'Mortes', value: 'não' },
    { id: 'cirurgias_Fatores', label: 'Cirurgias', value: 'não' },
    { id: 'acidentes', label: 'Acidentes', value: 'não' },
    { id: 'separacoes', label: 'Separações', value: 'não' },
    { id: 'divorcio', label: 'Divórcio dos pais', value: 'não' },
    { id: 'mudEmpregoPais', label: 'Mudança de emprego dos pais', value: 'não' },
    { id: 'trocaEscola', label: 'Troca de escola', value: 'não' },
    { id: 'mudFamilia', label: 'Mudança da família', value: 'não' },
    { id: 'difFinanceiras', label: 'Dificuldades financeiras', value: 'não' },
    { id: 'novoCasamento', label: 'Novo casamento', value: 'não' },
    { id: 'traumaSexual', label: 'Trauma sexual', value: 'não' },
    { id: 'outrasPerdas', label: 'Outras perdas', value: 'não' },
    { id: 'bullying', label: 'Bullying', value: 'não' },
    { id: 'outroFatorEscola', label: 'Outro fator na escola', value: 'não' },
]

export const nivelHabilidades = [
    {label: '---', value: null},
    {label: 'Acima da média', value: 'acimaMedia'},
    {label: 'Na média', value: 'naMedia'},
    {label: 'Abaixo da média', value: 'abaixoMedia'},
    {label: 'Dificuldades severas', value: 'difSeveras'}
]

export const outrasDificuldades = [
    {id: 'difArticulacao', label: 'Dificuldades de articulação', value: 'não'},
    {id: 'difRitmoEntonacaoFala', label: 'Dificuldade no rítmo de entonação da fala', value: 'não'},
    {id: 'repeteUltPalavra', label: 'Repete a última palavra ou frase ouvida', value: 'não'}, 
    {id: 'difExpressDesejo', label: 'Dificuldade para expressar desejos', value: 'não'},
    {id: 'falaDesorganizada', label: 'Fala desorganizada', value: 'não'},
    {id: 'falaAgramatical', label: 'Fala agramatical', value: 'não'},
    {id: 'falaInfantilizada', label: 'Fala infantilizada', value: 'não'},
    {id: 'aprendizagemLenta', label: 'Aprendizagem lenta', value: 'não'},
    {id: 'esqueceFazerCoisas', label: 'Esquece-se de fazer as coisas', value: 'não'},
    {id: 'distraiFacilmente', label: 'Distrai-se facilmente', value: 'não'},
    {id: 'esqueceInstrucoes', label: 'Esquece frequentemente instruções', value: 'não'},
    {id: 'perdeFreqPertences', label: 'Perde frequentemente pertences', value: 'não'},
    {id: 'difPlanTarefas', label: 'Dificuldade em planejar tarefas', value: 'não'},
    {id: 'semConsequenciasAcoes', label: 'Não prevê consequências das ações', value: 'não'},
    {id: 'pensamentoLentificado', label: 'Pensamento lentificado', value: 'não'},
    {id: 'difDinheiroMatematica', label: 'Dificuldade com dinheiro/matemática', value: 'não'},
    {id: 'poucaNocaoTemporal', label: 'Pouca noção temporal', value: 'não'}
]

export const caracteristicasSociais = [
    {id: 'prefereSozinho', label: 'Prefere ficar sozinho', value: 'não'},
    {id: 'excQuietoTimido', label: 'Excessivamente quieto ou tímido', value: 'não'},
    {id: 'interesseObjetos', label: 'Mais interessado em objetos que em pessoas', value: 'não'},
    {id: 'difFazerAmigos', label: 'Dificuldade em fazer amigos', value: 'não'},
    {id: 'provocadoPorCriancas', label: 'Provocado por outras crianças', value: 'não'},
    {id: 'provocaCriancas', label: 'Provoca, ameaça, intimida outras crianças', value: 'não'},
    {id: 'prefTrabSozinho', label: 'Prefere fazer trabalho escolar sozinho', value: 'não'},
    {id: 'baixaTolFrustracao_Sociais', label: 'Baixa tolerância a frustração', value: 'não'},
    {id: 'redeContVirtual', label: 'Possui rede de contatos virtuais', value: 'não'},
    {id: 'mantemContatoForaEscola', label: 'Mantem contato com os colegas de sala de aula fora da escola', value: 'não'},
    {id: 'nProcuradoPorPares', label: 'Não procurado para estabelecer vínculos de amizade por seus pares', value: 'não'},
    {id: 'difPontoVistaOutro', label: 'Dificuldade em ver o ponto de vista de outra pessoa', value: 'não'},
    {id: 'semEmpatia', label: 'Não tem empatia com os outros', value: 'não'},
    {id: 'confiaDemais', label: 'Confia demais nos outros', value: 'não'},
    {id: 'naoApreciaHumor', label: 'Não aprecia o humor', value: 'não'},
]

export const comportamento = [
    {id: 'teimoso', label: 'Teimoso', value: 'não'},
    {id: 'facilmenteIrritado', label: 'Facilmente irritável, bravo, ressentido', value: 'não'},
    {id: 'birrasFrequentes', label: 'Birras frequentes', value: 'não'},
    {id: 'heteroagressao', label: 'Heteroagressão', value: 'não'},
    {id: 'autoagressao', label: 'Autoagressão', value: 'não'},
    {id: 'destroiCoisas', label: 'Joga ou destrói coisas', value: 'não'},
    {id: 'mente', label: 'Mente', value: 'não'},
    {id: 'discuteAdultos', label: 'Discute com os adultos', value: 'não'},
    {id: 'baixaTolFrustracao_comportamento', label: 'Baixa tolerância a frustração', value: 'não'},
    {id: 'desafiador', label: 'Comportamento desafiador', value: 'não'},
    {id: 'foge', label: 'Foge', value: 'não'},
    {id: 'necessitaSupervisao', label: 'Necessita de muita supervisao', value: 'não'},
    {id: 'impulsivo', label: 'Impulsivo', value: 'não'},
    {id: 'poucaNocaoPerigo', label: 'Pouca noção do perigo', value: 'não'},
    {id: 'faltaAEscola', label: 'Falta à escola', value: 'não'},
    {id: 'perigoso', label: 'Perigoso para consigo mesmo ou com os outros', value: 'não'},
    {id: 'falasSuicidas', label: 'Fala sobre se matar', value: 'não'},
    {id: 'medosIncomuns', label: 'Medos incomuns, hábitos ou maneirismos', value: 'não'},
    {id: 'pareceDepressivo', label: 'Parece depressivo', value: 'não'},
    {id: 'choraComFrequencia', label: 'Chora com frequência', value: 'não'},
    {id: 'excesAnsioso', label: 'Excessivamente preocupado e ansioso', value: 'não'},
    {id: 'apegadoObjetos', label: 'Demasiadamente apegado a certos objetos', value: 'não'},
    {id: 'sexualmenteAtivo', label: 'Sexualmente ativo', value: 'não'},
    {id: 'enurese', label: 'Problemas de controle vescal - enurese', value: 'não'},
    {id: 'encoprese', label: 'Pouco controle esfincteriano - encoprese', value: 'não'},
    {id: 'tiques', label: 'Tiques motor ou vocal', value: 'não'},
    {id: 'reacaoExacerbBarulho', label: 'Reação exacerbada ao barulho', value: 'não'},
    {id: 'reacaoExacerbToque', label: 'Reação exacerbada ao toque', value: 'não'},
    {id: 'sonhaFantasia', label: 'Sonha acordado excessivamente e fantasia a vida', value: 'não'},
    {id: 'probOlfatoPaladar', label: 'Problemas com o olfato e paladar', value: 'não'},
    {id: 'caminhaPontaPes', label: 'Caminha na ponta dos pés', value: 'não'},
    {id: 'balancaCorpo', label: 'Fica balançando o corpo', value: 'não'}
]

export const habilidadesMotoras = [
    {id: 'poucaCoordenacaoFina', label: 'Pouca coordenação motora fina', value: 'não'},
    {id: 'poucaCoordenacaoAmpla', label: 'Pouca coordenação motora ampla', value: 'não'},
    {id: 'desequilibrio', label: 'Apresenta desequilíbrio (cai muito ou tropeça muito)', value: 'não'},
    {id: 'difCorrer', label: 'Dificuldade para correr', value: 'não'},
    {id: 'probPostura', label: 'Problemas de postura', value: 'não'},
    {id: 'hiperatividade', label: 'Demonstra hiperatividade', value: 'não'},
]

export const parto = [
    {id: 0, label: '---', value: null},
    {id: 1, label: 'Normal', value: 'normal'},
    {id: 2, label: 'Cesárea', value: 'cesarea'}
]

export const condDesenvolvAtuais = [
    {id: 1, label: 'Segura o rosto do adulto para fazê-lo olhar em determinada direção', value: 'não'},
    {id: 2, label: 'Pega na mão do adulto como se fosse uma ferramenta para alcançar algo', value: 'não'},
    {id: 3, label: 'Faz uso de gestos para se comunicar', value: 'não'},
    {id: 4, label: 'Atende quando chamada pelo nome?', value: 'não'},
    {id: 5, label: 'Apresenta dificuldade na articulação e pronúncia?', value: 'não'},
    {id: 6, label: 'Apresenta dificuldade no rítmo e entonação da voz?', value: 'não'},
    {id: 7, label: 'Repete a última palavra ou frase imediatamente ouvida?', value: 'não'},
    {id: 8, label: 'Faz confusão entre pronomes (eu, tu, eles)?', value: 'não'}
]
export const difAutocuidado = [
    {value: null, label: '---'},
    {value: 'sim', label: 'Sim'},
    {value: 'não', label: 'Não'},
    {value: 'com dificuldade', label: 'Com dificuldade'}
]

export const difSociabilidadeAfetividade = [
    {value: null, label: '---'},
    {value: 'sim', label: 'Sim'},
    {value: 'não', label: 'Não'},
    {value: 'ocasionalmente', label: 'Ocasionalmente'}
]

export const comportApego = [
    {id: 1, label: 'Demonstra preocupação quando separado dos pais', value:''},
    {id: 2, label: 'Sorri ou demonstra excitação com o retorno dos pais?', value:''},
    {id: 3, label: 'Busca a ajuda dos pais quando machucado', value:''}
]

export const comportRepetitivos = [
    {id: 1, label: 'Apega-se a objetos pouco comuns para a idade (ex: pedra, plástico...) e carrega consigo cotidianamente e se desorganiza quando retirados', value: 'não'},
    {id: 2, label: 'Realiza movimentos das mãos perto do rosto', value: 'não'},
    {id: 3, label: 'Realiza movimentos dos dedos e mãos junto ao corpo', value: 'não'},
    {id: 4, label: 'Balanço do corpo', value: 'não'},
    {id: 5, label: 'Realiza movimento de braços (flapping)', value: 'não'},
    {id: 6, label: 'Apresenta reação exacerbada ao som, barulhos, ruídos', value: 'não'}
]