
            function ShowSearch(){
                var hidden = document.getElementById("btn-search");
                hidden.classList.add("hidden");
    
                var show = document.getElementById("input-search")
                show.classList.remove("hidden")
                show.classList.add("block")
    
            };
                function hidesearch(){
                var hidden = document.getElementById("btn-search");
                hidden.classList.remove("hidden");
                hidden.classList.add("block");
                var show = document.getElementById("input-search");
                hidden.classList.remove("block");
                show.classList.add("hidden");
    
            }
                var window = document.getElementById('window')
                var dropdown = document.getElementById('dropdown');
                var arrow = document.getElementById ('arrow');
    
                function show(){
            
            if (dropdown.classList.contains('hidden')){
                    dropdown.classList.remove('hidden')
                arrow.classList.add('rotate-180','transition')
            }
                else{
                    dropdown.classList.add('hidden')
                arrow.classList.remove('rotate-180')
    
            }
           
        
           
            
    
        }
    
    
    
    
    
    
                function yes(){
                    document.getElementById('value').innerHTML
                    = 'Yes, my supporters can message me';
                var dropdown = document.getElementById('dropdown');
                dropdown.classList.add('hidden')
                var arrow = document.getElementById ('arrow')
                arrow.classList.toggle('rotate-180')
           }
    
                function no(){
                    document.getElementById('value').innerHTML
                    = 'No, only if I message first';
                var dropdown = document.getElementById('dropdown');
                dropdown.classList.add('hidden')
                var arrow = document.getElementById ('arrow')
                arrow.classList.toggle('rotate-180')
           }