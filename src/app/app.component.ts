import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewMainComponent } from './components/new-main/new-main.component';
import { INew } from './interfaces/inew.interface';

@Component({
  selector: 'app-root',
  imports: [FormComponent, NewsListComponent, NewMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bloggingSystem';
  isMenuOpen = false;

  newsList: INew[] = [
    {
      title:
        'El debate sobre el consumo energético de la IA: datos y soluciones',
      image:
        'https://gruposinvestigacion.unir.net/dds/wp-content/uploads/sites/43/2024/11/blendBoard.png',
      body: 'El desarrollo de la inteligencia artificial (IA) está transformado la sociedad a pasos agigantados, pero también ha planteado serias preocupaciones sobre su impacto ambiental, específicamente en relación con el consumo energético necesario para entrenar y operar modelos avanzados. Sin embargo, ¿cuál es la realidad actual y futura de ese impacto? ¿hay soluciones?. El desmesurado consumo energético de la IA es una realidad. La creciente demanda de modelos de IA cada vez más potentes, como los modelos de lenguaje extenso (LLM) y las redes neuronales profundas, ha impulsado un aumento exponencial en los recursos computacionales necesarios. Entrenar modelos avanzados requiere una cantidad considerable de energía, dado que involucra múltiples iteraciones de cálculos matemáticos complejos realizados en hardware especializado, como unidades de procesamiento gráfico (GPU) o unidades de procesamiento tensorial (TPU). Además del entrenamiento, la inferencia, que implica el uso de modelos entrenados para realizar tareas, también requiere energía significativa, especialmente cuando se trata de aplicaciones a gran escala como asistentes virtuales, motores de búsqueda o sistemas de recomendación. El consumo posterior provocado por el uso intensivo de aplicaciones basadas en IA, donde el gasto de energía que antes tenía lugar “en el cerebro del usuario” se traslada ahora a los recursos de procesamiento de los que se alimentan las aplicaciones, también es enorme.',
      date: new Date('2024-11-28'),
    },
    {
      title: 'XAI: rebautizando la “tortilla de patatas”',
      image:
        'https://gruposinvestigacion.unir.net/dds/wp-content/uploads/sites/43/2024/03/5880229_c236a21041_c.jpg',
      body: 'Discúlpeme el lector por resumir en los siguientes párrafos conceptos que seguramente ya conozca y que en este mismo blog posiblemente ya se hayan presentado. Si salimos a la calle y preguntamos qué es la inteligencia artificial (IA) es posible que acabemos concluyendo que el éxito de las arquitecturas de aprendizaje profundo ha conseguido que de forma popular la IA se reduzca a aprendizaje automático y éste al aprendizaje profundo. Y es que el tiempo es oro y además se escapa entre los dedos como la arena seca de la playa: vamos moviéndonos cada vez más deprisa en casi todos los ámbitos. En 1988 Michie2 propuso una clasificación de los algoritmos de aprendizaje automático en función de la comprensibilidad de lo aprendido. Los más potentes generarían nuevo conocimiento, los potentes generaría una versión legible por el humano de lo aprendido y los de menor potencia simplemente aprenderían a imitar con precisión los patrones ocultos en los datos procesados. Aproximadamente a mitad de la década de los 50 del siglo pasado, se agruparon las iniciativas de IA basadas en manipulaciones simbólicas (no numérico – estadísticas) en lo que se conoció como IA simbólica. El objetivo de su diseño era capturar y modelizar los procesos de la inteligencia humana para reproducirla. Desde la perspectiva de Michie, por diseño, estos modelos evidenciaban la máxima potencia desde el punto de vista de la comprensibilidad.',
      date: new Date('2024-11-15'),
    },
  ];

  selectedNew: INew | null = null;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  getDataForm(event: INew) {
    this.newsList = [...this.newsList, event];
  }

  getNewSelected(event: INew) {
    this.selectedNew = event;

    //Al seleccionar una noticia cerramos el menu para que se vea
    this.closeMenu();
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
