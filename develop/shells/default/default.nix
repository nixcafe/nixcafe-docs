{
  inputs,
  pkgs,
  system,
  ...
}:
let
  commitCheck = inputs.self.checks.${system}.git-hooks.shellHook;
in
pkgs.mkShell {
  packages = with pkgs; [
    nodejs
    corepack
    ni
    bun
  ];

  shellHook = ''
    ${commitCheck}

    # Add node_modules/.bin to PATH if it exists
    if [ -d "$PWD/node_modules/.bin" ]; then
      export PATH="$PWD/node_modules/.bin:$PATH"
    fi

    # Disable download prompt for corepack
    export COREPACK_ENABLE_DOWNLOAD_PROMPT=0
    echo "node version: `${pkgs.nodejs}/bin/node --version`"
  '';

  buildInputs = inputs.self.checks.${system}.git-hooks.enabledPackages;
}
