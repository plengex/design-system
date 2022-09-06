<script setup>
  import Sidebar from './Sidebar.vue'
  import SidebarNav from './SidebarNav.vue'
  import SidebarBrand from './SidebarBrand.vue'
  import NavItem from '../nav/NavItem.vue'
  import NavSubItem from '../nav/NavSubItem.vue'
  import IconDocument from '@carbon/icons-vue/lib/document/20'
  import IconGroup from '@carbon/icons-vue/lib/group/20'
  import IconDataStructured from '@carbon/icons-vue/lib/data--structured/20'
  import IconSettings from '@carbon/icons-vue/lib/settings--adjust/20'
  import IconDashboard from '@carbon/icons-vue/lib/dashboard/20'
</script>

<style scoped>
  .preview {
    @apply block h-96 overflow-hidden;

    .sidebar--fixed {
      @apply absolute;
    }
  }
</style>

# Sidebar

## Usage
### Basic Sidebar

<preview>
<Sidebar>
  <SidebarBrand>
    <img src="./assets/images/logo-privy.svg" alt="" />
  </SidebarBrand>
  <SidebarNav title="Main">
    <NavItem active>Documents</NavItem>
    <NavItem>Contacts</NavItem>
    <NavItem>Structure</NavItem>
  </SidebarNav>
</Sidebar>
</preview>

```vue
<template>
  <Sidebar>
    <SidebarBrand>
      <img src="./assets/images/logo-privy.svg" alt="" />
    </SidebarBrand>
    <SidebarNav>
      <NavItem active>Documents</NavItem>
      <NavItem>Contacts</NavItem>
      <NavItem>Structure</NavItem>
    </SidebarNav>
  </Sidebar>
</template>
```

### Fixed Sidebar
<preview>
<Sidebar fixed>
  <SidebarBrand>
    <img src="./assets/images/logo-privy.svg" alt="" />
  </SidebarBrand>
  <SidebarNav>
    <NavItem active>Documents</NavItem>
    <NavItem>Contacts</NavItem>
    <NavItem>Structure</NavItem>
  </SidebarNav>
</Sidebar>
</preview>

```vue
<template>
  <Sidebar fixed>
    <SidebarBrand>
      <img src="./assets/images/logo-privy.svg" alt="" />
    </SidebarBrand>
    <SidebarNav>
      <NavItem active>Documents</NavItem>
      <NavItem>Contacts</NavItem>
      <NavItem>Structure</NavItem>
    </SidebarNav>
  </Sidebar>
</template>
```

## Alignment
To align Sidebar, use align prop. Available value are `left` and `right`
<preview>
<Sidebar fixed align="right">
  <SidebarBrand>
    <img src="./assets/images/logo-privy.svg" alt="" />
  </SidebarBrand>
  <SidebarNav>
    <NavItem active>Documents</NavItem>
    <NavItem>Contacts</NavItem>
    <NavItem>Structure</NavItem>
  </SidebarNav>
</Sidebar>
</preview>

```vue
<template>
  <Sidebar fixed align="right">
    <SidebarBrand>
      <img src="./assets/images/logo-privy.svg" alt="" />
    </SidebarBrand>
    <SidebarNav>
      <NavItem active>Documents</NavItem>
      <NavItem>Contacts</NavItem>
      <NavItem>Structure</NavItem>
    </SidebarNav>
  </Sidebar>
</template>
```
## Condensed
When you need less space/padding of sidebar navigation, you can set by using `condensed` prop.

<preview>
<Sidebar fixed>
  <SidebarBrand>
    <img src="./assets/images/logo-privy.svg" alt="" />
  </SidebarBrand>
  <SidebarNav condensed>
    <NavItem active>Documents</NavItem>
    <NavItem>Contacts</NavItem>
    <NavItem>Structure</NavItem>
  </SidebarNav>
</Sidebar>
</preview>

```vue
<template>
  <Sidebar fixed>
    <SidebarBrand>
      <img src="./assets/images/logo-privy.svg" alt="" />
    </SidebarBrand>
    <SidebarNav condensed>
      <NavItem active>Documents</NavItem>
      <NavItem>Contacts</NavItem>
      <NavItem>Structure</NavItem>
    </SidebarNav>
  </Sidebar>
</template>
```

## Types
Sidebar has 2 types, `wide` and `narrow`. Default is `wide`. In variant `narrow`, you can place your navigation with icon-only or icon-label.

### Icon Only
<preview>
  <Sidebar fixed type="narrow">
    <SidebarBrand>
      <img src="./assets/images/logo-privy-icon.svg" alt="" />
    </SidebarBrand>
    <SidebarNav>
      <NavItem active>
        <template #icon>
          <IconDocument />
        </template>  
      </NavItem>
      <NavItem>
        <template #icon>
          <IconGroup />
        </template>
      </NavItem>
      <NavItem>
        <template #icon>
          <IconDataStructured />
        </template>
      </NavItem>
    </SidebarNav>
  </Sidebar>
</preview>

```vue
<template>
  <Sidebar fixed variant="narrow">
    <SidebarBrand>
      <img src="./assets/images/logo-privy-icon.svg" alt="" />
    </SidebarBrand>
    <SidebarNav>
      <NavItem active>
        <template #icon>
          <IconDocument />
        </template>
      </NavItem>
      <NavItem>
        <template #icon>
          <IconDocument />
        </template>
      </NavItem>
      <NavItem>
        <template #icon>
          <IconDataStructured />
        </template>
      </NavItem>
    </SidebarNav>
  </Sidebar>
</template>
```
### Icon with Label

<preview>
  <Sidebar fixed type="narrow">
    <SidebarBrand>
      <img src="./assets/images/logo-privy-icon.svg" alt="" />
    </SidebarBrand>
    <SidebarNav>
      <NavItem active>
        <template #icon>
          <IconDocument />
        </template>  
        Docs
      </NavItem>
      <NavItem>
        <template #icon>
          <IconGroup />
        </template>
        Users
      </NavItem>
      <NavItem>
        <template #icon>
          <IconDataStructured />
        </template>
        Struct
      </NavItem>
    </SidebarNav>
  </Sidebar>
</preview>

```vue
<template>
  <Sidebar fixed type="narrow">
    <SidebarBrand>
      <img src="./assets/images/logo-privy-icon.svg" alt="" />
    </SidebarBrand>
    <SidebarNav>
      <NavItem active>
        <template #icon>
          <IconDocument />
        </template>  
        Docs
      </NavItem>
      <NavItem>
        <template #icon>
          <IconGroup />
        </template>
        Users
      </NavItem>
      <NavItem>
        <template #icon>
          <IconDataStructured />
        </template>
        Struct
      </NavItem>
    </SidebarNav>
  </Sidebar>
</template>
```

### Bottom Menus
If you need to place menus in the bottom, you just add `bottom` prop in your `<SidebarNav>`

<preview>
  <Sidebar fixed type="narrow">
    <SidebarBrand>
      <img src="./assets/images/logo-privy-icon.svg" alt="" />
    </SidebarBrand>
    <SidebarNav bottom>
      <NavItem>
        <template #icon>
          <IconSettings />
        </template>
      </NavItem>
      <NavItem>
        <template #icon>
          <img src="./assets/images/icon-flag.svg"/>
        </template>
        ENG
      </NavItem>
    </SidebarNav>
  </Sidebar>
</preview>

```vue
<template>
  <Sidebar fixed type="narrow">
    <SidebarBrand>
      <img src="./assets/images/logo-privy-icon.svg" alt="" />
    </SidebarBrand>
    <SidebarNav bottom>
      <NavItem active>
        <template #icon>
          <IconSettings />
        </template>
      </NavItem>
      <NavItem>
        <template #icon>
          <img src="./assets/images/icon-flag.svg"/>
        </template>
        ENG
      </NavItem>
    </SidebarNav>
  </Sidebar>
</template>
```

## Submenu
Submenu just works in `wide` type. If you need collapsible menus, you just add `collapsible` prop in your `<NavSubItem>`

### Default Submenu

<preview>
<Sidebar fixed>
  <SidebarBrand>
    <img src="./assets/images/logo-privy.svg" alt="" />
  </SidebarBrand>
  <SidebarNav>
    <NavItem active>
      <template #icon>
        <IconDashboard />
      </template>
      Dashboard
    </NavItem>
    <NavSubItem text="Documents">
      <template #icon>
        <IconDocument />
      </template>
      <SidebarNav id="chld-1">
        <NavItem>
          Need Action
        </NavItem>
        <NavItem>
          In Progress
        </NavItem>
        <NavItem>
          Others
        </NavItem>
      </SidebarNav>
    </NavSubItem>
  </SidebarNav>
</Sidebar>
</preview>

```vue
<template>
  <Sidebar fixed>
    <SidebarBrand>
      <img src="./assets/images/logo-privy.svg" alt="" />
    </SidebarBrand>
    <SidebarNav>
      <NavItem active>
        <template #icon>
          <IconDashboard />
        </template>
        Dashboard
      </NavItem>
      <NavSubItem text="Documents">
        <template #icon>
          <IconDocument />
        </template>
        <SidebarNav id="chld-1">
          <NavItem>
            Need Action
          </NavItem>
          <NavItem>
            In Progress
          </NavItem>
          <NavItem>
            Others
          </NavItem>
        </SidebarNav>
      </NavSubItem>
    </SidebarNav>
  </Sidebar>
</template>
```

### Collapsible Menus

<preview>
<Sidebar fixed>
  <SidebarBrand>
    <img src="./assets/images/logo-privy.svg" alt="" />
  </SidebarBrand>
  <SidebarNav>
    <NavItem active>
      <template #icon>
        <IconDashboard />
      </template>
      Dashboard
    </NavItem>
    <NavSubItem text="Documents" collapsible>
      <template #icon>
        <IconDocument />
      </template>
      <SidebarNav id="chld-1">
        <NavItem>
          Need Action
        </NavItem>
        <NavItem>
          In Progress
        </NavItem>
        <NavItem>
          Others
        </NavItem>
      </SidebarNav>
    </NavSubItem>
  </SidebarNav>
</Sidebar>
</preview>

```vue
<template>
  <Sidebar fixed>
    <SidebarBrand>
      <img src="./assets/images/logo-privy.svg" alt="" />
    </SidebarBrand>
    <SidebarNav>
      <NavItem active>
        <template #icon>
          <IconDashboard />
        </template>
        Dashboard
      </NavItem>
      <NavSubItem text="Documents" collapsible>
        <template #icon>
          <IconDocument />
        </template>
        <SidebarNav id="chld-1">
          <NavItem>
            Need Action
          </NavItem>
          <NavItem>
            In Progress
          </NavItem>
          <NavItem>
            Others
          </NavItem>
        </SidebarNav>
      </NavSubItem>
    </SidebarNav>
  </Sidebar>
</template>
```

## API

### Props `<Sidebar>`

| Props          |   Type    | Default     | Description                                                       |
|----------------|:---------:|:-----------:|-------------------------------------------------------------------|
| `variant`      | `String`  | `pills`     | Sidebar variant, valid value is `pills`, `lines` and `tabs`       |
| `align`        | `String`  | `left`      | Sidebar alignment, valid value is `left` and `right`              |
| `type`         | `String`  | `wide`      | Sidebar type, valid value is `wide` and `narrow`                  |
| `fixed`        | `Boolean` | `false`     | Activate fixed Sidebar                                            |

### Slots `<Sidebar>`

| Name             | Description                                             |
|------------------|---------------------------------------------------------|
| `default`        | Content to place in the Sidebar                         |

### Props `<SidebarBrand>`

| Props          |   Type    | Default     | Description                                                       |
|----------------|:---------:|:-----------:|-------------------------------------------------------------------|
| `href`         | `String`  | `undefined` | Target URL of the Sidebar Brand link                              |

### Slots `<SidebarBrand>`

| Name             | Description                                             |
|------------------|---------------------------------------------------------|
| `default`        | Content to place in the Sidebar Brand                   |

### Props `<SidebarNav>`

| Props          |   Type    | Default     | Description                                                       |
|----------------|:---------:|:-----------:|-------------------------------------------------------------------|
| `title`        | `String`  | `undefined` | Title to place in the top of sidebar navigation block             |
| `bottom`       | `Boolean` | `false`     | Place group of sidebar navigation in the bottom of Sidebar        |
| `condensed`    | `Boolean` | `false`     | Activate condensed of group navigation with less space            |

### Slots `<SidebarNav>`

| Name             | Description                                             |
|------------------|---------------------------------------------------------|
| `default`        | Content to place in the Sidebar Nav                     |

### Events

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Arguments</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3" class="text-center">There no event here</td>
    </tr>
  </tbody>
</table>