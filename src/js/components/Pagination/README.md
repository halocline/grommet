## Pagination
A control that enables selection of a single page from a 
      range of pages.

[![](https://cdn-images-1.medium.com/fit/c/120/120/1*TD1P0HtIH9zF0UEH28zYtw.png)](https://storybook.grommet.io/?selectedKind=undefined-Pagination&full=0&stories=1&panelRight=0) [![](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/grommet/grommet-sandbox?initialpath=/pagination&module=%2Fsrc%2FPagination.js)
## Usage

```javascript
import { Pagination } from 'grommet';
      <Pagination />
```

## Properties

**a11yTitle**

Custom label to be used by screen readers. When provided, an aria-label will
   be added to the element.

```
string
```

**alignSelf**

How to align along the cross axis when contained in
      a Box or along the column axis when contained in a Grid.

```
start
center
end
stretch
```

**gridArea**

The name of the area to place
    this inside a parent Grid.

```
string
```

**margin**

The amount of margin around the component. An object can
    be specified to distinguish horizontal margin, vertical margin, and
    margin on a particular side.

```
none
xxsmall
xsmall
small
medium
large
xlarge
{
  bottom: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  end: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  horizontal: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  left: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  right: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  start: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  top: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  vertical: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string
}
string
```

**numberEdgePages**

The number of pagination buttons visible at the start and end of page 
        range. Defaults to `1`.

```
number
```

**numberItems**

The total number of items to paginate.

```
number
```

**numberMiddlePages**

The number of pagination buttons visible in the middle of the 
        controls. Defaults to `3`.

```
number
```

**onChange**

Function called when the user clicks a page or arrow button. The 
        single argument is an event containing the target page via 
        `event.page`, and the startIndex and endIndex for items contained 
        in the target page via `event.startIndex` and `event.endIndex`, 
        respectively.

```
function
```

**page**

The default page. If used with onChange, it can be used to control the 
        active page via state.

```
number
```

**showSummary**

Whether to display a summary of what range of results are 
      being displayed. If true, this will be displayed in the format of 
      "Showing X - Y of Z". Alternately, a custom JSX element can be provided.

```
boolean
element
```

**size**

Specifies what size the pagination control buttons should be. Defaults to `medium`.

```
small
medium
large
```

**step**

The number of items per page. Defaults to `10`.

```
number
```
  
## Intrinsic element

```
nav
```
## Theme
  
**pagination.button.active.background.color**

Background color when the button is active. Expects `string | { dark: string, light: string }`.

Defaults to

```
active-background
```

**pagination.button.color**

The color of the text label. Expects `string | { dark: string, light: string }`.

Defaults to

```
text-strong
```

**pagination.button.hover.background.color**

Background color of the button when hovered. Expects `string | { dark: string, light: string }`.

Defaults to

```
background-contrast
```

**pagination.button.hover.color**

The color of the text label when hovered. Expects `string | { dark: string, light: string }`.

Defaults to

```
undefined
```

**pagination.container**

Any valid Box props for the Box wrapping the 
    pagination controls. Expects `object`.

Defaults to

```
undefined
```

**pagination.container.extend**

Any additional style for the Box wrapping 
    the pagination controls. Expects `string | (props) => {}`.

Defaults to

```
undefined
```

**pagination.control.extend**

Any additional style for each control. Expects `string | (props) => {}`.

Defaults to

```
undefined
```

**pagination.control.pad**

Padding around each control's label. Expects `string | object`.

Defaults to

```
4px
```

**pagination.control.size.small.border.radius**

Rounding of the corners for each control. Expects `string`.

Defaults to

```
3px
```

**pagination.control.size.small.border.width**

Border thickness for each control. Expects `string`.

Defaults to

```
2px
```

**pagination.control.size.small.font.size**

The font size of each control's label. Expects `string`.

Defaults to

```
14px
```

**pagination.control.size.small.font.height**

The line-height of each control's label. Expects `string`.

Defaults to

```
20px
```

**pagination.control.size.small.height**

The height for each control. Expects `string`.

Defaults to

```
30px
```

**pagination.control.size.small.width**

The minimum width for each control. 
    Width will scale up fitting the control's label. Expects `string`.

Defaults to

```
30px
```

**pagination.control.size.medium.border.radius**

Rounding of the corners for each control. Expects `string`.

Defaults to

```
4px
```

**pagination.control.size.medium.border.width**

Border thickness for each control. Expects `string`.

Defaults to

```
2px
```

**pagination.control.size.medium.font.size**

The font size of each control's label. Expects `string`.

Defaults to

```
18px
```

**pagination.control.size.medium.font.height**

The line-height of each control's label. Expects `string`.

Defaults to

```
24px
```

**pagination.control.size.medium.height**

The height for each control. Expects `string`.

Defaults to

```
36px
```

**pagination.control.size.medium.width**

The minimum width for each control. 
    Width will scale up fitting the control's label. Expects `string`.

Defaults to

```
36px
```

**pagination.control.size.large.border.radius**

Rounding of the corners for each control. Expects `string`.

Defaults to

```
4px
```

**pagination.control.size.large.border.width**

Border thickness for each control. Expects `string`.

Defaults to

```
6px
```

**pagination.control.size.large.font.size**

The font size of each control's label. Expects `string`.

Defaults to

```
22px
```

**pagination.control.size.large.font.height**

The line-height of each control's label. Expects `string`.

Defaults to

```
28px
```

**pagination.control.size.large.height**

The height for each control. Expects `string`.

Defaults to

```
48px
```

**pagination.control.size.large.width**

The minimum width for each control. 
    Width will scale up fitting the control's label. Expects `string`.

Defaults to

```
48px
```

**pagination.controls.align**

How the pagination controls should be aligned 
    within the containing Box. Expects `string`.

Defaults to

```
center
```

**pagination.controls.direction**

Direction in which the containing Box should 
    display the pagination controls. Expects `string`.

Defaults to

```
row
```

**pagination.controls.gap**

Amount of gap spacing between each control. Expects `string`.

Defaults to

```
xxsmall
```

**pagination.controls.margin**

Amount of margin surrounding the controls. Expects `string`.

Defaults to

```
none
```

**pagination.controls.pad**

Amount of pad surrounding the controls. Expects `string`.

Defaults to

```
none
```

**pagination.icons.color**

The color used for the icon. Expects `string | { dark: string, light: string }`.

Defaults to

```
undefined
```

**pagination.icons.next**

Icon to use as the 'next page' control. Expects `element`.

Defaults to

```
<Next />
```

**pagination.icons.previous**

Icon to use as the 'previous page' control. Expects `element`.

Defaults to

```
<Previous />
```
