function insert(num)
{
    let numero = document.getElementById('result').innerHTML;
    if (numero.length > 12) 
    {
        return;    
    }
    document.getElementById('result').innerHTML = numero + num;

}

function clean()
{
    document.getElementById('result').innerHTML = "";
}

function back()
{
    let resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
    let resultado = document.getElementById('result').innerHTML;
    if(resultado)
    {
        let evalresult = eval(resultado).toString();      
        if (evalresult.length > 12)
        {
            evalresult = evalresult.substring(0,12) + '+';
        }
        document.getElementById('result').innerHTML = evalresult;
    }
    else
    {
        document.getElementById('result').innerHTML = "inválido";
    }
}

