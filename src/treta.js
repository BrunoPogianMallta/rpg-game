import Character from "./character.js";
import Enemy from "./Enemy.js";


//importa dados do formulário de criação

const input =document.querySelector('#central-painel')
const campo = document.querySelector('#campo')
const selecionaClasse =document.querySelector('#class-select')
const selecionaClassImage = document.querySelector('#class-image')

let classe = selecionaClasse.innerHTML
let classeImg = selecionaClassImage



console.log(selecionaClasse)

    
        
 

const characters = []



//função cria personagem
const criaPersonagem = ()=>{
    const newCharacter = new Character()
    //responsabilizar a classe por isso T
    if(classe === 'Warrior'){
        newCharacter.name= campo.value
        newCharacter.class = `${classe}`
        newCharacter.hp = 100
        newCharacter.atack=5
        newCharacter.defense=15
        newCharacter.level =1
        newCharacter.experience = 0,
        newCharacter.image ='./assets/warVivo.gif'
    }else{
        newCharacter.name= campo.value
        newCharacter.class = `${classe}`
        newCharacter.hp = 80
        newCharacter.atack=15
        newCharacter.defense= 5
        newCharacter.level =1
        newCharacter.experience = 0
        newCharacter.image = './assets/magoVivo.gif'
    }
    
    
    characters.push(newCharacter)
    console.log(characters)
    return characters
}



//aplica os valores no quadro do personagem criado
const mostraPersonagemCriado = () =>{
    const quadro = document.querySelector('#container-character');
    quadro.innerHTML =''
    if(characters.length > 2){
        alert('Número máximo de Personagens já criado')
    } 
    characters.forEach(character =>{
        quadro.innerHTML += `<div class="quadro"> <h2 id="char-name">${character.name}</h2>
        <div class="personagem-status">
            <div class="avatar">
                <img id ="class-image" src="${character.image}">
                <div class="status">
                    <fieldset class="char-class">Class: ${character.class}</fieldset>
                    <fieldset class="char-hp">Hp: ${character.hp}</fieldset>
                    <fieldset class="char-atk">Atq:${character.atack}</fieldset>
                    <fieldset class="char-def">Def:${character.defense}</fieldset>
                    <fieldset class="char-level">Level:${character.level}</fieldset>
                    <fieldset class="char-xp">Exp:${character.experience}</fieldset>
                </div>

            </div>
        </div>
        </div>`
      
    })
    const habilitaQuadroPersonagem = document.querySelector('#container-character')
    // habilitaQuadroPersonagem.style.display = 'block';

    // const getNameCharacter = document.querySelector('#char-name')
    // const getClassCharacter = document.querySelector('#char-class')
    // const getHpCharacter = document.querySelector('#char-hp')
    // const getAtkCharacter = document.querySelector('#char-atk')
    // const getDefCharacter = document.querySelector('#char-def')
    // const getXpCharacter = document.querySelector('#char-xp')




    // getNameCharacter.innerHTML = characters[0].name
    // getClassCharacter.innerHTML = characters[0].class
    // getAtkCharacter .innerHTML += characters[0].atack
    // getHpCharacter.innerHTML += characters[0].hp
    // getDefCharacter.innerHTML += characters[0].defense
    // getXpCharacter.innerHTML += characters[0].experience
}



    
    //remove o quadro de registro do personagem
    const removeQuadraRegistro =()=>{
        const eliminaQuadro= document.getElementById("central-painel"); 
           eliminaQuadro.style.display= 'none '
    
        }
    
    

//evento que valida o formulário de criação do personagem
input.addEventListener('submit', function(e) {
    e.preventDefault()
   
    if(!campo.value){
        alert('Escolha um nome antes de prosseguir!')
    }else if(!selecionaClasse.value){
        alert('Escolha uma Classe antes de prosseguir!')
    }
    else{
        classe = selecionaClasse.value
        criaPersonagem()
        document.getElementById('campo').value='';
        // removeQuadraRegistro()
        mostraPersonagemCriado()
    }

    
        
    
   
});




