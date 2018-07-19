# umbraco-mdi-icons

Add [Material Design Icons](https://cdn.materialdesignicons.com/2.5.94/) to your Umbraco website with this easy to use data-type.

## Why

[Material icons](https://materialdesignicons.com/) is used for many of our Umbraco based sites. After a lot of copy and pasting of `mdi-*` classes into view markup, we developed a custom data-type to do this tedious "icon-to-class" selection via a user friendly back office extension for Umbraco.

## Features

This data-type extends the Umbraco back office to give you the following inline functionality:

- Easy to use icon browser
- Reactive text based icon search
- Top 20 icon matches shown
- Icon reset switch
- Toggle browse button

<br>

<img 
alt="Material Design Icon data type for Umbraco in the back office" src="https://raw.githubusercontent.com/mooce/umbraco-mdi-icons/master/docs/img/backoffice-default.png" width="47%"> 
<img 
alt="Material Design Icon data type for Umbraco has reactive search"
src="https://raw.githubusercontent.com/mooce/umbraco-mdi-icons/master/docs/img/backoffice-nomatch.png" width="47%">

## Installation

Umbraco Material Design Icons can be installed via Nuget:
```
Install-Package Mooce.UmbracoMdiIcons
```

Alternatively, you can download the project source and copy the contents of `/src/App_Plugins` to the `/App_Plugins` directory of your Umbraco based project.

## Usage

Once installed, navigate to the Developer section of Umbraco's back office. Create a custom data type, and select `Mooce.MdiIconPicker` from the list of availbe data-types. Once created, your new `Mooce.MdiIconPicker` data-type will be available for use when creating or updating Document Types.

Ensure the Material Design Icons [(version 2.5.94)](https://cdn.materialdesignicons.com/2.5.94/) CSS is linked in your project template(s):
```
<link rel="stylesheet" href="//cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
```

The `Mooce.MdiIconPicker` data-type stores data as a string. Using the data-type is in your view markup is as simple as this:

```
<i class="mdi @(Model.Content.MyIcon)"></i>
```
