import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");

texto.innerHTML = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis ante cursus, malesuada lectus in, fermentum magna. Cras eget congue est. Vestibulum egestas suscipit lacus, nec sodales mi sagittis in. Maecenas bibendum nibh vitae pharetra tincidunt. Nunc interdum ultricies ligula nec euismod. Cras sodales lectus et purus dictum varius. Aenean consequat mollis ipsum, sit amet mattis diam convallis quis. Vestibulum gravida semper urna nec sagittis.
        <br/>
        <br/>
        Curabitur varius sit amet ipsum sed suscipit. Sed malesuada non nibh ut ultricies. Proin vehicula maximus risus, sed molestie nunc posuere vitae. Suspendisse ut ipsum sed mauris ultrices ultricies. Nunc vehicula sem quis lacus molestie fermentum. Quisque accumsan, tellus ac scelerisque egestas, nunc odio imperdiet est, id malesuada ex magna ut est. In vitae varius eros. Sed posuere purus in nunc scelerisque venenatis.
        <br/>
        <br/>

        Maecenas sed elit luctus, ultrices erat nec, sollicitudin orci. Sed interdum elit eu ligula viverra pharetra. Aliquam erat volutpat. Nunc venenatis nisl eget nisi porta egestas. Etiam molestie, leo eu porta consequat, diam eros fermentum massa, id tristique enim dolor sit amet ligula. Morbi sed vulputate augue, sed suscipit augue. Praesent sit amet sagittis diam. Aenean dignissim, tellus pulvinar volutpat varius, diam nisl egestas ligula, non mattis elit ex lacinia diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur luctus, nisi quis placerat convallis, neque nulla commodo ante, aliquet suscipit mi urna et risus.
        <br/>
        <br/>
        Pellentesque risus tellus, maximus et libero in, dictum feugiat tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis sed sem sit amet sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas accumsan velit, eu egestas turpis ultrices eu. Ut congue dapibus dignissim. In hac habitasse platea dictumst. Ut sit amet neque pharetra, volutpat ex quis, iaculis arcu. Morbi dictum iaculis nibh nec pulvinar. Mauris dapibus lorem non libero aliquam, a ornare turpis aliquam. Etiam non viverra leo, eu tristique arcu. Aliquam mauris leo, elementum sit amet arcu et, volutpat cursus magna. Cras fermentum pulvinar nisi, id pretium arcu porttitor eu.
        <br/>
        <br/>

        Cras semper nunc quis ligula rhoncus ornare. Quisque blandit augue in nunc vestibulum pulvinar. Nullam pharetra est sed nisl placerat dictum et eu eros. Vestibulum in dui consectetur, aliquet tortor a, aliquet quam. Nulla imperdiet non metus quis consequat. Curabitur pharetra, elit sit amet vehicula congue, leo nunc dictum dolor, nec eleifend risus quam in elit. Nullam in purus at lacus efficitur aliquam dapibus a est. Phasellus tincidunt dapibus mi, vel accumsan massa luctus vitae.
        <br/>
`;

const body = document.querySelector("body");

body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight) * 100);
};

// funcion que haga el calculo
const scroll$ = fromEvent(document, "scroll");

const progress$ = scroll$.pipe(
    map(calcularPorcentajeScroll),
    tap(console.log)
)

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});
