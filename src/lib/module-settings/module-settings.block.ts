import * as grapesjs from 'grapesjs'
import { AppState } from '../utils'
import {
    ModuleSettingsBlockName,
    ModuleSettingsComponentName,
} from '../constants'

export class ModuleSettingsBlock {
    public readonly blockType: string
    public readonly label = 'Module Settings'
    public readonly content
    public readonly appState: AppState
    public readonly grapesEditor: grapesjs.Editor
    public readonly idFactory: (name: string) => string
    public readonly render = ({ el }: { el: HTMLElement }) => {
        el.classList.add('gjs-fonts', 'gjs-f-b2')
    }

    constructor(params: {
        appState: AppState
        grapesEditor: grapesjs.Editor
        idFactory: (name: string) => string
    }) {
        Object.assign(this, params)
        this.blockType = this.idFactory(ModuleSettingsBlockName)
        this.content = {
            type: this.idFactory(ModuleSettingsComponentName),
        }
    }
}
