import { AppState } from '../utils'
import * as grapesjs from 'grapesjs'
import { FluxAppComponentName } from '../constants'
import { renderFluxApp } from '../runner/flux-app/renderer'

export class FluxAppComponent {
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
        this.componentType = this.idFactory(FluxAppComponentName)

        this.model = this.getModel()
    }

    getModel() {
        return {
            defaults: {
                script: renderFluxApp,
                droppable: false,
                attributes: {
                    componentType: this.componentType,
                },
                traits: [
                    {
                        name: 'app',
                        type: 'text',
                        label: "Application's id",
                    },
                ],
            },
            initialize() {
                this.on('change:attributes:app', () => {
                    this.view.render()
                })
            },
        }
    }
}
