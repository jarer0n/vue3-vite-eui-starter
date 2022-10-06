import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import Unocss from 'unocss/vite';
import {
    presetAttributify,
    presetIcons,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss';

import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Inspect from 'vite-plugin-inspect';

const pathSrc = path.resolve(__dirname, 'src');

export default defineConfig({
    resolve: {
        alias: {
            '~/': `${pathSrc}/`,
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "~/styles/element/index.scss" as *;`,
            },
        },
    },
    plugins: [
        vue(),
        Components({
            extensions: ['vue', 'md'],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass',
                }),
                IconsResolver({
                    enabledCollections: ['ep'],
                }),
            ],
            dts: 'src/components.d.ts',
        }),

        // https://github.com/antfu/unocss
        Unocss({
            presets: [
                presetUno(),
                presetAttributify(),
                presetIcons({
                    scale: 1.2,
                    warn: true,
                }),
            ],
            transformers: [transformerDirectives(), transformerVariantGroup()],
        }),

        AutoImport({
            // Auto import functions from Vue, e.g. ref, reactive, toRef...
            imports: ['vue'],

            // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
            resolvers: [
                ElementPlusResolver(),

                // Auto import icon components
                IconsResolver({
                    prefix: 'Icon',
                }),
            ],

            dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
        }),

        Icons({
            autoInstall: true,
        }),
    ],
});
