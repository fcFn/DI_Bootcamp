<html>
<body>
    <button id="btn">Click me</button>
    <button id="btn1">Hey Hey</button>

    <script>
        let x = document.getElementById("btn")
        let y = document.getElementById("btn1")

        y.addEventListener("click", RespondClick);
        y.addEventListener("mouseover", RespondMouseOver);

        x.addEventListener("click", RespondClick); 
        x.addEventListener("mouseover", RespondMouseOver); 
        x.addEventListener("mouseout", RespondMouseOut); 

        function RespondClick() { 
            alert("Button Clicked")
        } 

        function RespondMouseOver() { 
            alert("My mouse is over the btn")
        } 

        function RespondMouseOut() { 
            alert("My mouse is out of the btn")
        }     

    </script>
</body>
</html>
