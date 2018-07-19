# umbraco-mdi-icons

Add [Material Design Icons](https://cdn.materialdesignicons.com/2.5.94/) to your Umbraco website quickly and easily with this easy to use data-type.

## Why

[Material icons](https://materialdesignicons.com/) is used for many of our Umbraco based sites. After a lot of manual copy and pasting of `mdi-*` classes into view markup, we developed a custom data-type to do this tedious "icon-to-class" selection.

## Features

This data-type extends the Umbraco back office to give you this inline functionality:

- easy to use icon browser
- reactive text based icon search
- top 20 icon matches shown
- icon reset switch
- toggle browse button

<img 
alt="Material Design Icon data type for Umbraco in the back office" src="https://raw.githubusercontent.com/mooce/umbraco-mdi-icons/master/docs/img/backoffice-default.png" width="45%"> 
<img 
alt="Material Design Icon data type for Umbraco has reactive search"
src="https://raw.githubusercontent.com/mooce/umbraco-mdi-icons/master/docs/img/backoffice-nomatch.png" width="45%">

## Installation

Umbraco Material Design Icons can be installed via Nuget:
```
Install-Package Mooce.UmbracoMdiIcons
```

## Usage

Once installed, navigate to the Developer section in Umbraco's back office. Create a custom data type, and select `Mooce.MdiIconPicker` from the list. Once created, your new `Mooce.MdiIconPicker` based data-type will be avalible for you to choose from when creating or updating Document Types.

Link the Material Design Icons [(version 2.5.94)](https://cdn.materialdesignicons.com/2.5.94/) to your project template(s):
```
<link rel="stylesheet" href="//cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
```

The `Mooce.MdiIconPicker` data-type stores values as a string. Using the data-type is in your view markup is as simple as this:

```
<i class="mdi @(Model.Content.MyIcon)"></i>
```
