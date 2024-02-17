<template>
<a class="skip-main" href="#main">Skip to main content</a><!-- basic accessibility feature. Move '#main' to your content's container-->
	<TopNavigation></TopNavigation>
    <div id="main">
        <IntroPanel></IntroPanel>
        <TypographyPanel :fonts="fonts"></TypographyPanel>
        <ColorPanel></ColorPanel>
        <TextPanel></TextPanel>
        <UIFormPanel></UIFormPanel>

    </div>
</template>

<script>
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'
import TopNavigation from './components/TopNavigation.vue';
import IntroPanel from './components/IntroPanel.vue';
import TypographyPanel from './components/TypographyPanel.vue';
import ColorPanel from './components/ColorPanel.vue';
import TextPanel from './components/TextPanel.vue';
import UIFormPanel from './components/UIFormPanel.vue';

const fullConfig = resolveConfig(tailwindConfig)

export default{
    components:{
        TopNavigation,
        IntroPanel,
        TypographyPanel,
        ColorPanel,
        TextPanel,
        UIFormPanel
        
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
</style>