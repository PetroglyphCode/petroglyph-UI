<template>
<a class="skip-main" href="#main">Skip to main content</a><!-- basic accessibility feature. Move '#main' to your content's container-->
	<TopNavigation></TopNavigation>
    <div id="main">
        <IntroPanel></IntroPanel>
        <PanelDivider elementId="typography" tailwindColor="bg-gray-100"></PanelDivider>
        <TypographyPanel :fonts="fonts"></TypographyPanel>
        <PanelDivider elementId="colors" tailwindColor="bg-blue-200"></PanelDivider>
        <ColorPanel></ColorPanel>
        <PanelDivider elementId="text" tailwindColor="bg-blue-300"></PanelDivider>

        <TextPanel></TextPanel>
        <PanelDivider elementId="uicomponents" tailwindColor="bg-blue-300"></PanelDivider>
        <UIFormPanel></UIFormPanel>
        <PanelDivider elementId="images" tailwindColor="bg-blue-300"></PanelDivider>

        <ImagePanel> </ImagePanel>
        <PanelDivider elementId="cards" tailwindColor="bg-blue-300"></PanelDivider>

       <CardPanel></CardPanel>
       <PanelDivider elementId="footer" tailwindColor="bg-blue-300"></PanelDivider>

      <DocumentFooter></DocumentFooter>
    </div>
</template>

<script>
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'
import TopNavigation from './components/TopNavigation.vue';
import PanelDivider from './components/PanelDivider.vue';
import IntroPanel from './components/IntroPanel.vue';
import TypographyPanel from './components/TypographyPanel.vue';
import ColorPanel from './components/ColorPanel.vue';
import TextPanel from './components/TextPanel.vue';
import UIFormPanel from './components/UIFormPanel.vue';
import ImagePanel from './components/ImagePanel.vue';
import CardPanel from './components/CardPanel.vue'
import DocumentFooter from './components/DocumentFooter.vue'


const fullConfig = resolveConfig(tailwindConfig)

export default{
    components:{
        TopNavigation,
        PanelDivider,
        IntroPanel,
        TypographyPanel,
        ColorPanel,
        TextPanel,
        UIFormPanel,
        ImagePanel,
        CardPanel,
        DocumentFooter
        
    },
    data(){
        return{
            fonts:{
                fontDisplay:{
                    name : 'Zilla Slab'
                },
                fontText :{
                    name: 'Libre Franklin'
                }
            }
        }
    }
    
}
</script>

<style >
/* Styles placed here are global */

@font-face {
  font-family: 'Zilla Slab';
  font-weight: 400;
  src: url('assets/fonts/zilla-slab/ZillaSlab-Regular.otf') format('opentype');
}
@font-face {
  font-family: "Zilla Slab";
  font-weight: 400;
  font-style:italic;
  src: url(assets/fonts/zilla-slab/ZillaSlab-RegularItalic.otf) format('opentype');
}
@font-face {
  font-family: "Zilla Slab";
  font-weight: 500;
  src: url(assets/fonts/zilla-slab/ZillaSlab-SemiBold.otf) format("opentype");
}
@font-face {
  font-family: "Zilla Slab";
  font-weight: 600;
  src: url(assets/fonts/zilla-slab/ZillaSlab-SemiBold.otf) format("opentype");
}
@font-face {
  font-family: "Zilla Slab";
  font-weight: 700;
  src: url(assets/fonts/zilla-slab/ZillaSlab-Bold.otf) format("opentype");
}
@font-face {
  font-family: "Zilla Slab";
  font-weight: 700;
  font-style:italic;
  src: url("assets/fonts/zilla-slab/ZillaSlab-BoldItalic.otf") format("opentype");
}
@font-face {
  font-family: "Libre Franklin";
  font-weight: 400;
  src: url("assets/fonts/libre-franklin/librefranklin-regular.ttf") format("truetype");
}

@font-face {
  font-family: "Libre Franklin";
  font-weight: 400;
  font-style:italic;
  src: url("assets/fonts/libre-franklin/librefranklin-italic.ttf") format("truetype");
}
@font-face {
  font-family: "Libre Franklin";
  font-weight: 500;
  src: url("assets/fonts/libre-franklin/librefranklin-medium.ttf") format("truetype");
}
@font-face {
  font-family: "Libre Franklin";
  font-weight: 500;
  font-style:italic;
  src: url("assets/fonts/libre-franklin/librefranklin-mediumitalic.ttf") format("truetype");
}
@font-face {
  font-family: "Libre Franklin";
  font-weight: 600;
  src: url("assets/fonts/libre-franklin/librefranklin-semibold.ttf") format("truetype");
}
@font-face {
  font-family: "Libre Franklin";
  font-weight: 600;
  font-style:italic;
  src: url("assets/fonts/libre-franklin/librefranklin-semibolditalic.ttf") format("truetype");
}
@font-face {
  font-family: "Libre Franklin";
  font-weight: 700;
  src: url("assets/fonts/libre-franklin/librefranklin-bold.ttf") format("truetype");
}
@font-face {
  font-family: "Libre Franklin";
  font-weight: 700;
  font-style:italic;
  src: url("assets/fonts/libre-franklin/librefranklin-bolditalic.ttf") format("truetype");
}
a.skip-main {
    left:-999px;
    position:absolute;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
    z-index:-999;
}
a.skip-main:focus, a.skip-main:active {
    color: #fff;
    background-color:#000;
    left: auto;
    top: auto;
    width: 30%;
    height: auto;
    overflow:auto;
    margin: 10px 35%;
    padding:5px;
    border-radius: 15px;
    border:4px solid yellow;
    text-align:center;
    font-size:1.2em;
    z-index:999;
}

</style>