<template>
    <section class="layout-Info">
        <header class="infoBar">
            <section class="Title">
                <img class="logo" :src="publicPath + 'iconos/logoShalom.jpg'" alt="logo ShalomTrendy">
                <div>
                    <h1>ShalomTrendy</h1>
                    <p :style="{fontFamily:'sans-serif', fontWeight:'bold'}">Moda Femenina Moderna</p>
                </div>
            </section>
            <section class="Bar">
                <button>Ingresar</button>
            </section>
        </header>
        <article class="carrousel-Container">
            <section class="carrousel">
                <div v-for="(categoryObj, categoryIndex) in topsList" :key="categoryIndex" class="category-container">
                    <button class="prev-button" @click="prevImage(categoryIndex)"></button>
                    <img class="img-product" :src="getCurrentImage(categoryObj, currentIndices[categoryIndex])" alt="" v-reveal
                     :style="{ transition: 'all 0.9s ease' }">
                    <button class="next-button" @click="nextImage(categoryIndex, getCategoryLength(categoryObj))"></button>
                    <h3>{{ getCategoryName(categoryObj) }}</h3>
                </div>
                
            </section>
            <section class="social-Web">
                <img onclick="window.open('https://www.instagram.com/shalomtrendy.ve/', '_blank')" :src="publicPath + 'iconos/instagram.png'" alt="instagram">
                <img onclick="window.open('https://www.tiktok.com/@shalomtrendy.ve', '_blank')" :src="publicPath + 'iconos/tiktok.png'" alt="tiktok">
                <img onclick="window.open('https://wa.me/584242066580?text=Hola%2C%20quiero%20consultar%20precios%20y%20disponibilidad', '_blank')" :src="publicPath + 'iconos/whatsapp.png'" alt="whatsapp">
            </section>
        </article>
    </section>
</template>

<script lang="ts">
import { ref, defineComponent, Directive } from 'vue';

const vReveal: Directive = {
    mounted(el) {
        el.classList.add('reveal-hidden');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.classList.add('reveal-show');
                    observer.unobserve(el);
                }
            });
        }, {
            threshold: 0.1
        });
        observer.observe(el);
    }
};

type Category = {
    [key: string]: string[];
};

export default defineComponent({
    name: 'Home',
    directives: {
        reveal: vReveal
    },
    setup() {
        const cuelloAltoList = [
            "/cuello_alto/top1.jpg",
            "/cuello_alto/top2.jpg",
            "/cuello_alto/top3.jpeg"
        ];
        const charmList = [
            "/charm/top1.jpg",
        ];
        const aberturaList = [
            "/abertura/top1.jpeg",
        ];
        const clasicoList = [
            "/clasico/top1.jpeg",
            
        ];
        const franelillaList = [
            "/franelilla/top1.jpeg",
        ];
        const olimpycList = [
            "/olimpyc/top1.jpg",
            "/olimpyc/top2.jpeg",
        ];
        const girlyList = [
            "/Girly/top1.jpeg",
            
        ];
        const oneShoulderList= [
            "/one-shoulder/top1.jpeg",
        ];
        const sparkList = [
            "/spark/top1.jpeg",
        ];
        const superNovaList = [
            "/superNova/top1.jpeg",
        ];
        const moonList=[
            "/moon/top1.jpeg"
        ];
        const modelosList=[
            "/modelos/abertura-beige.jpeg",
            "/modelos/aura-red.jpeg",
            "/modelos/clasico-aqua.jpeg",
            "/modelos/cuello-alto-white.jpeg",
            "/modelos/franelilla-oranje.jpeg",
            "/modelos/girly-purple.jpeg",
            "/modelos/moon-white.jpeg",
            "/modelos/olimpyc-aqua.jpeg",
            "/modelos/one-shoulder-white.jpeg",
            "/modelos/spark-pink.jpeg",
            "/modelos/super-nova-blue.jpeg"
        ];

        const topsList: Category[] = [
            {"Cuello Alto": cuelloAltoList},
            {"Charm": charmList},
            {"Olympic": olimpycList},
            {"Abertura": aberturaList},
            {"Clásico": clasicoList},
            {"Franelilla": franelillaList},
            {"Girly": girlyList},
            {"One Shoulder": oneShoulderList},
            {"Spark": sparkList},
            {"Super Nova": superNovaList},
            {"Moon": moonList},
            {"Modelos": modelosList},
        ];

        // Array para guardar el índice actual de cada categoría
        const currentIndices = ref(topsList.map(() => 0));

        const publicPath = process.env.BASE_URL;

        // Función para obtener el array de imágenes de un objeto categoría
        const getCategoryArray = (categoryObj: Category): string[] => {
            const key = Object.keys(categoryObj)[0];
            return categoryObj[key];
        };

        // Función para obtener la imagen actual de una categoría
        const getCurrentImage = (categoryObj: Category, index: number): string => {
            const arr = getCategoryArray(categoryObj);
            const path = arr[index];
            return process.env.BASE_URL + (path.startsWith('/') ? path.slice(1) : path);
        };

        // Función para obtener la longitud de una categoría
        const getCategoryLength = (categoryObj: Category): number => {
            return getCategoryArray(categoryObj).length;
        };

        // Función para obtener el nombre de la categoría
        const getCategoryName = (categoryObj: Category): string => {
            return Object.keys(categoryObj)[0];
        };

        // Función para ir a la siguiente imagen
        const nextImage = (categoryIndex: number, categoryLength: number) => {
            const img = document.querySelectorAll('.img-product')[categoryIndex] as HTMLElement;
            if (img) {
                img.style.transform = 'translateX(1em)';
                img.style.opacity = '0';
                
                setTimeout(() => {
                    currentIndices.value[categoryIndex] = 
                        (currentIndices.value[categoryIndex] + 1) % categoryLength;
                    img.style.transform = 'translateX(0)';
                    img.style.opacity = '1';
                }, 300);
            }
        };

        const prevImage = (categoryIndex: number) => {
            const img = document.querySelectorAll('.img-product')[categoryIndex] as HTMLElement;
            if (img) {
                img.style.transform = 'translateX(-1em)';
                img.style.opacity = '0';
                
                setTimeout(() => {
                    const currentIndex = currentIndices.value[categoryIndex];
                    const categoryObj = topsList[categoryIndex];
                    const categoryLength = getCategoryLength(categoryObj);
                    currentIndices.value[categoryIndex] = 
                        currentIndex === 0 ? categoryLength - 1 : currentIndex - 1;
                    img.style.transform = 'translateX(0)';
                    img.style.opacity = '1';
                }, 300);
            }
        };
        
        return {
            topsList,
            currentIndices,
            getCurrentImage,
            getCategoryLength,
            getCategoryName,
            nextImage,
            prevImage,
            publicPath,
        }
    }
});
</script>