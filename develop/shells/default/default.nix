{
  inputs,
  pkgs,
  system,
  ...
}:
let
  commitHooks = inputs.git-hooks.lib.${system}.run {
    src = ../../..;

    hooks = {
      biome = {
        enable = true;
        name = "biome";
        entry = "${pkgs.biome}/bin/biome ci .";
        pass_filenames = false;
      };

      typecheck = {
        enable = true;
        name = "TypeScript typecheck";
        entry = "bun typecheck";
        files = "\\.(ts|tsx)$";
        pass_filenames = false;
      };

      test = {
        enable = true;
        name = "bun test";
        entry = "bun test";
        files = "\\.(ts|tsx)$";
        pass_filenames = false;
      };
    };
  };
in
pkgs.mkShell {
  packages = with pkgs; [
    nodejs
    corepack
    ni
    bun
  ];

  shellHook = ''
    ${commitHooks.shellHook}

    if [ -d "$PWD/node_modules/.bin" ]; then
      export PATH="$PWD/node_modules/.bin:$PATH"
    fi

    export COREPACK_ENABLE_DOWNLOAD_PROMPT=0
    echo "node version: ${pkgs.nodejs}/bin/node --version"
  '';

  buildInputs = commitHooks.enabledPackages;
}
