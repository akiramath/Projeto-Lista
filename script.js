let form = document.getElementById('form');
        form.addEventListener('submit', adicionar);
        function adicionar(e){
            e.preventDefault();
            let data = this.elements.dados.value;
            let lista = document.querySelector('ol');
            let item = document.createElement('li');
            let texto = document.createElement('p');

            texto.textContent = data;
            this.elements.dados.value = "";
            item.append(texto);
            lista.append(item);

            let remove = document.createElement('span');
            remove.classList.add('remove');
            item.append(remove);
            remove.addEventListener('click', deleteitem);
            item.addEventListener('click', itemfeito);
        }

        function deleteitem(){
            this.parentElement.remove();
        }

        function itemfeito(){
            this.classList.toggle('feito');
        }

        //mudar o background de acordo com o topico escolhido

        let titulo = document.getElementById('titulo');
        let fundo = document.getElementById('fundo');
        let icon = document.getElementById('icon');
        let item = document.querySelector('ol');

        function farmacia(){
            //limpar
            item.innerText = '';

            //fundo
            fundo.style.backgroundImage = 'url("img/farmacia.jpg")';
            fundo.style.backgroundPosition = 'center center';
            fundo.style.backgroundSize = 'cover';

            //icon
            icon.src = 'img/icon-farmacia.png';

            //titulo
            titulo.innerHTML = 'Lista de Remédios:';
        }

        function mercado(){
            //limpar
            item.innerText = '';
            
            //fundo
            fundo.style.backgroundImage = 'url("img/mercado.jpg")';
            fundo.style.backgroundPosition = 'center center';
            fundo.style.backgroundSize = 'cover';

            //icon
            icon.src = 'img/icon-mercado.png';

            //titulo
            titulo.innerHTML = 'Lista de Mercadorias:';
        }

        function petshop(){
            //limpar
            item.innerText = '';
            
            //fundo
            fundo.style.backgroundImage = 'url("img/petshop.jpg")';
            fundo.style.backgroundPosition = 'center center';
            fundo.style.backgroundSize = 'cover';

            //icon
            icon.src = 'img/icon-pet.png';

            //titulo
            titulo.innerHTML = 'Lista de Cuidados com o Pet:';
        }