
const runTimeDependencies = {
    "load": {
        "@youwol/flux-view": "^1.0.3",
        "rxjs": "^6.5.5"
    },
    "differed": {},
    "includedInBundle": []
}
const externals = {
    "@youwol/flux-view": {
        "commonjs": "@youwol/flux-view",
        "commonjs2": "@youwol/flux-view",
        "root": "@youwol/flux-view_APIv1"
    },
    "rxjs": {
        "commonjs": "rxjs",
        "commonjs2": "rxjs",
        "root": "rxjs_APIv6"
    }
}
const exportedSymbols = {
    "@youwol/flux-view": {
        "apiKey": "1",
        "exportedSymbol": "@youwol/flux-view"
    },
    "rxjs": {
        "apiKey": "6",
        "exportedSymbol": "rxjs"
    }
}
export const setup = {
    name:'@youwol/grapes-flux',
        assetId:'QHlvdXdvbC9ncmFwZXMtZmx1eA==',
    version:'0.1.1',
    shortDescription:"Various components for grapes to play with Flux assets.",
    developerDocumentation:'https://platform.youwol.com/applications/@youwol/cdn-explorer/latest?package=@youwol/grapes-flux',
    npmPackage:'https://www.npmjs.com/package/@youwol/grapes-flux',
    sourceGithub:'https://github.com/youwol/grapes-flux',
    userGuide:'https://l.youwol.com/doc/@youwol/grapes-flux',
    apiVersion:'01',
    runTimeDependencies,
    externals,
    exportedSymbols,
    getDependencySymbolExported: (module:string) => {
        return `${exportedSymbols[module].exportedSymbol}_APIv${exportedSymbols[module].apiKey}`
    }
}
