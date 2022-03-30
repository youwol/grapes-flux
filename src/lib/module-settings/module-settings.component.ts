import { AppState } from '../utils'
import * as grapesjs from 'grapesjs'
import { ModuleSettingsComponentName } from '../constants'
import { renderModuleSettings } from '../runner/module-settings/renderer'

export class ModuleSettingsComponent {
    public readonly appState: AppState
    public readonly grapesEditor: grapesjs.Editor
    public readonly idFactory: (name: string) => string

    public readonly componentType: string

    public readonly extendFn = ['initialize']
    public readonly isComponent = (el: HTMLElement) => {
        return (
            el.getAttribute &&
            el.getAttribute('componentType') == this.componentType
        )
    }
    public readonly model

    constructor(params: {
        appState: AppState
        grapesEditor: grapesjs.Editor
        idFactory: (name: string) => string
    }) {
        Object.assign(this, params)
        this.componentType = this.idFactory(ModuleSettingsComponentName)

        this.model = this.getModel()
    }

    getModel() {
        return {
            defaults: {
                script: renderModuleSettings,
                droppable: false,
                attributes: {
                    componentType: this.componentType,
                },
                traits: [
                    {
                        name: 'toolbox',
                        type: 'text',
                        label: 'Toolbox',
                    },
                    {
                        name: 'version',
                        type: 'text',
                        label: 'Version',
                    },
                    {
                        name: 'module',
                        type: 'text',
                        label: 'Module',
                    },
                ],
            },
            initialize() {
                this.on('change:attributes:toolbox', () => {
                    this.view.render()
                })
                this.on('change:attributes:module', () => {
                    this.view.render()
                })
                this.on('change:attributes:version', () => {
                    this.view.render()
                })
            },
        }
    }
}
