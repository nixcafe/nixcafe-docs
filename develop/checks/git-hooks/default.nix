{
  inputs,
  system,
  pkgs,
  ...
}:
inputs.git-hooks.lib.${system}.run {
  src = ../../..;

  hooks = {
    biome = {
      enable = true;
      name = "biome";
      entry = "${pkgs.biome}/bin/biome ci .";
      pass_filenames = false;
    };
  };
}
