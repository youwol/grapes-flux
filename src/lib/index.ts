import { FluxAppBlock } from './flux-app/flux-app.block'
import { ModuleSettingsBlock } from './module-settings/module-settings.block'
import { FluxAppComponent } from './flux-app/flux-app.component'
import { ModuleSettingsComponent } from './module-settings/module-settings.component'

export function getBlocks() {
    return [FluxAppBlock, ModuleSettingsBlock]
}

export function getComponents() {
    return [FluxAppComponent, ModuleSettingsComponent]
}
