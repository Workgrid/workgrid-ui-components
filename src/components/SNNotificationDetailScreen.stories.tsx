import React from 'react'
import { Story, Meta } from '@storybook/react'
import { IonPage, IonContent } from '@ionic/react'
import * as SNNotificationDetailScreen from './SNNotificationDetailScreen'
import { SNNotificationDetailScreenProps } from './SNNotificationDetailScreen'

export default {
  title: 'Screens/Smart Notification Detail',
  component: SNNotificationDetailScreen.Small,
  parameters: {
    a11y: {
      /*
      Disabling "heading-order" rule specifically because the content of a Smart Notification detail is dynamic. With real
      notifications we cannot guarantee heading order so these tests shouldn't be bound by that constraint.

      Disabling "nested-interactive" until there is a fix from Ionic: https://github.com/ionic-team/ionic-framework/issues/23511
       */
      disabledRules: ['nested-interactive', 'heading-order']
    }
  }
} as Meta

const SmallTemplate: Story<SNNotificationDetailScreenProps> = args => <SNNotificationDetailScreen.Small {...args} />

// Since we're using Small / Large screens in the same story we can't use the component decorators so we wrap the large screen in the required elements here
const LargeTemplate: Story<SNNotificationDetailScreenProps> = args => (
  <IonPage>
    <IonContent>
      <SNNotificationDetailScreen.Large {...args} />
    </IonContent>
  </IonPage>
)

const BaseArgs: SNNotificationDetailScreenProps = {
  onSubmitAction: async (actions, data) => console.log('form submitted', actions, data),
  onDelete: async () => console.log('Deleted'),
  onOpenUrlAction: url => console.log('URL clicked', url),
  translations: {
    choiceSelectCancelText: 'Cancel',
    choiceSelectOkText: 'Select',
    deleteNotificationText: 'Delete',
    moreOptionsText: 'More Options',
    validationMessages: {
      required: 'This field is required.',
      oneOf: 'The value entered must match one of the options from the list.',
      stringMax: options => `Please enter fewer than ${options.max} characters. (${options.value?.length ?? 0} used)`,
      stringUrl: 'Please enter a valid URL.',
      stringEmail: 'Please enter a valid email.',
      numberMax: options => `Please select a value higher than ${new Date(options.max)}.`,
      numberMin: options => `Please select a value lower than ${new Date(options.min)}.`,
      dateMax: options => `Please select a date before ${new Date(options.max).toLocaleDateString()}.`,
      dateMin: options => `Please select a date after ${new Date(options.min).toLocaleDateString()}.`,
      timeMax: options => `Please select a time before ${new Date(options.max).toLocaleDateString()}.`,
      timeMin: options => `Please select a time after ${new Date(options.min).toLocaleDateString()}.`
    }
  },
  notification: {
    id: 'a84b4bd6-048d-11e9-b464-0a58dfec3472',
    correlationId: '15c80f29-3273-4c3b-bbf1-7db8f045ece2',
    category: 'Important',
    firstSeenDate: null,
    hiddenBefore: '2018-12-20T19:30:06.000Z',
    hiddenAfter: '2018-12-20T19:45:06.000Z',
    dueAt: null,
    actionStatus: 'none_taken',
    actionTakenDate: null,
    actionCompletionDate: null,
    displayLifecycle: 'simple',
    sortValue: '00000000000050000000000000001545334207',
    section: 'toknow',
    priority: 'informational',
    from: {
      name: 'Notification Test',
      iconUrl: 'https://via.placeholder.com/64x64?text=Source%20Image'
    },
    title: {
      type: 'element',
      tagName: 'Title',
      children: [
        {
          type: 'element',
          tagName: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'A smart notification title that is really long'
            }
          ]
        }
      ]
    },
    body: {
      type: 'element',
      tagName: 'Body',
      children: [
        {
          type: 'element',
          tagName: 'paragraph',
          children: [
            {
              type: 'text',
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              type: 'element',
              tagName: 'Date',
              properties: {
                date: '2017-02-14T06:00:00Z',
                format: 'LONG'
              }
            },
            {
              type: 'text',
              value: ' '
            },
            {
              type: 'element',
              tagName: 'link',
              properties: {
                url: 'https://www.workgrid.com'
              },
              children: [
                {
                  type: 'text',
                  value: 'Workgrid'
                }
              ]
            },
            {
              type: 'text',
              value:
                ' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            }
          ]
        }
      ]
    },
    image: {
      altText: 'Body Image',
      url: 'https://via.placeholder.com/64x64?text=Body%20Image'
    },
    actions: [
      {
        type: 'Action.Submit',
        actionType: 'primary',
        causesValidation: true,
        title: 'Validated action',
        id: 'validated-action',
        data: {
          action: 'validated'
        }
      },
      {
        type: 'Action.Submit',
        actionType: 'secondary',
        causesValidation: false,
        title: 'Non-validated action',
        id: 'non-validated-action',
        data: {
          action: 'non-validated'
        }
      },
      {
        type: 'Action.OpenUrl',
        title: 'Open URL',
        url: 'https://www.workgrid.com'
      }
    ],
    detail: {
      type: 'element',
      tagName: 'Detail',
      children: [
        {
          type: 'element',
          tagName: 'Container',
          properties: {
            separator: true
          },
          children: [
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                weight: 'bolder',
                size: 'large'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Input Types'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'InputText',
              properties: {
                label: 'Text Input',
                id: 'text-input',
                type: 'email'
              }
            },
            {
              type: 'element',
              tagName: 'InputText',
              properties: {
                label: 'Multiline Input',
                id: 'multiline-input',
                isMultiline: true
              }
            },
            {
              type: 'element',
              tagName: 'InputDate',
              properties: {
                label: 'Date Input',
                id: 'date-input',
                isRequired: true,
                min: '2021-04-26T00:00:00.000Z'
              }
            },
            {
              type: 'element',
              tagName: 'InputTime',
              properties: {
                label: 'Time Input',
                id: 'time-input',
                isRequired: true
              }
            },
            {
              type: 'element',
              tagName: 'InputNumber',
              properties: {
                label: 'Number Input',
                id: 'number-input',
                isRequired: true,
                max: 8
              }
            },
            {
              type: 'element',
              tagName: 'InputToggle',
              properties: {
                title: 'Toggle Input',
                id: 'toggle-input',
                value: 'value-off',
                valueOff: 'value-off',
                valueOn: 'value-on'
              }
            },
            {
              type: 'element',
              tagName: 'InputChoiceSet',
              properties: {
                label: 'Choice Set Input',
                id: 'choice-set-input',
                isRequired: true
              },
              children: [
                {
                  type: 'element',
                  tagName: 'InputChoice',
                  properties: { title: 'Choice 1', value: 'choice-1' }
                },
                {
                  type: 'element',
                  tagName: 'InputChoice',
                  properties: { title: 'Choice 2', value: 'choice-2' }
                }
              ]
            },
            {
              type: 'element',
              tagName: 'InputChoiceSet',
              properties: {
                label: 'Multiple Choice Set Input',
                id: 'multi-choiceset-input',
                isMultiSelect: true,
                value: 'choice-1,choice-3',
                isRequired: true
              },
              children: [
                {
                  type: 'element',
                  tagName: 'InputChoice',
                  properties: { title: 'Choice 1', value: 'choice-1' }
                },
                {
                  type: 'element',
                  tagName: 'InputChoice',
                  properties: { title: 'Choice 2', value: 'choice-2' }
                },
                {
                  type: 'element',
                  tagName: 'InputChoice',
                  properties: { title: 'Choice 3', value: 'choice-3' }
                }
              ]
            }
            // Not including range right now due to an ARIA bug in the Ionic Range component. I didn't want to disable the specific ARIA rule for all inputs as it may introduce regressions.
            // https://github.com/ionic-team/ionic-framework/issues/23295
            // {
            //   type: 'element',
            //   tagName: 'InputRange',
            //   properties: {
            //     label: 'Range Input',
            //     id: 'range-input',
            //     min: 0,
            //     max: 100,
            //     step: 5
            //   }
            // }
          ]
        },
        {
          type: 'element',
          tagName: 'Container',
          properties: {
            separator: true
          },
          children: [
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                weight: 'bolder',
                size: 'large'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Text Hierarchy'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                weight: 'bolder',
                size: 'extraLarge'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This text is an h1 heading'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                weight: 'lighter',
                size: 'large'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This text is an h2 heading'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                weight: 'bolder',
                size: 'large'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This text is an h3 heading'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                weight: 'bolder',
                size: 'medium'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This text is an h4 heading'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                weight: 'default',
                size: 'medium'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This text is an h5 heading'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                weight: 'lighter',
                size: 'default'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This text is an h6 heading'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {},
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This is paragraph text'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                weight: 'lighter',
                size: 'small'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This is text smaller than a paragraph'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'element',
          tagName: 'Container',
          properties: {
            separator: true
          },
          children: [
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                weight: 'bolder',
                size: 'large'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Text Alignment'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                horizontalAlignment: 'left'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This text is left aligned'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                horizontalAlignment: 'center'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This text centered'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                horizontalAlignment: 'right'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This text right aligned'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'element',
          tagName: 'Container',
          properties: {
            separator: true
          },
          children: [
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                weight: 'bolder',
                size: 'large'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Text Colors'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                color: 'primary'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This is primary colored text'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                color: 'secondary'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This is secondary colored text'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                color: 'secondary'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This is tertiary colored text'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                color: 'attention'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This is attention colored text'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                color: 'medium'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This is medium colored text'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                color: 'good'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'This is success colored text'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'element',
          tagName: 'Container',
          properties: {
            separator: true
          },
          children: [
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                weight: 'bolder',
                size: 'large'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Text Markdown'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {},
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Text '
                    },
                    {
                      type: 'element',
                      tagName: 'strong',
                      children: [
                        {
                          type: 'text',
                          value: 'that is bold'
                        }
                      ]
                    },
                    {
                      type: 'text',
                      value: ' and text that '
                    },
                    {
                      type: 'element',
                      tagName: 'emphasis',
                      children: [
                        {
                          type: 'text',
                          value: 'has emphasis '
                        }
                      ]
                    },
                    {
                      type: 'text',
                      value: ' as well as ordered lists '
                    }
                  ]
                },
                {
                  type: 'element',
                  tagName: 'list',
                  properties: {
                    ordered: true,
                    start: 1,
                    spread: false
                  },
                  children: [
                    {
                      type: 'element',
                      tagName: 'listItem',
                      properties: {
                        spread: false,
                        checked: null
                      },
                      children: [
                        {
                          type: 'element',
                          tagName: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'list 1'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: 'element',
                      tagName: 'listItem',
                      properties: {
                        spread: false,
                        checked: null
                      },
                      children: [
                        {
                          type: 'element',
                          tagName: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'list 2 and other '
                            },
                            {
                              type: 'element',
                              tagName: 'strong',
                              children: [
                                {
                                  type: 'text',
                                  value: 'elements'
                                }
                              ]
                            },
                            {
                              type: 'text',
                              value: '.'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Unordered lists are also supported: '
                    }
                  ]
                },
                {
                  type: 'element',
                  tagName: 'list',
                  properties: {
                    ordered: false
                  },
                  children: [
                    {
                      type: 'element',
                      tagName: 'listItem',
                      properties: {
                        spread: false,
                        checked: null
                      },
                      children: [
                        {
                          type: 'element',
                          tagName: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'list 1'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: 'element',
                      tagName: 'listItem',
                      properties: {
                        spread: false,
                        checked: null
                      },
                      children: [
                        {
                          type: 'element',
                          tagName: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'list 2 and other '
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: ' and links as well: '
                    },
                    {
                      type: 'element',
                      tagName: 'link',
                      properties: {
                        url: 'https://www.workgrid.com'
                      },
                      children: [
                        {
                          type: 'text',
                          value: 'Workgrid'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'element',
          tagName: 'Container',
          properties: {
            separator: true
          },
          children: [
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                weight: 'bolder',
                size: 'large'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Column Sets'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'ColumnSet',
              children: [
                {
                  type: 'element',
                  tagName: 'Column',
                  properties: {
                    spacing: 'none',
                    separator: false
                  },
                  children: [
                    {
                      type: 'element',
                      tagName: 'TextBlock',
                      properties: {},
                      children: [
                        {
                          type: 'text',
                          value: 'The left column in a column set'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'element',
                  tagName: 'Column',
                  children: [
                    {
                      type: 'element',
                      tagName: 'TextBlock',
                      properties: {},
                      children: [
                        {
                          type: 'text',
                          value: 'The center column in a column set'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'element',
                  tagName: 'Column',
                  children: [
                    {
                      type: 'element',
                      tagName: 'TextBlock',
                      properties: {},
                      children: [
                        {
                          type: 'text',
                          value: 'The right column in a column set'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'ColumnSet',
              children: [
                {
                  type: 'element',
                  tagName: 'Column',
                  properties: {
                    spacing: 'none',
                    separator: false
                  },
                  children: [
                    {
                      type: 'element',
                      tagName: 'TextBlock',
                      properties: {},
                      children: [
                        {
                          type: 'text',
                          value: 'The left column splits the remaining space evenly with the right column'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'element',
                  tagName: 'Column',
                  properties: {
                    width: 50
                  },
                  children: [
                    {
                      type: 'element',
                      tagName: 'TextBlock',
                      children: [
                        {
                          type: 'text',
                          value: 'The center column takes up 50% of the space'
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'element',
                  tagName: 'Column',
                  children: [
                    {
                      type: 'element',
                      tagName: 'TextBlock',
                      properties: {},
                      children: [
                        {
                          type: 'text',
                          value: 'The right column splits the remaining space evenly with the left column'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'element',
          tagName: 'Container',
          properties: {
            separator: true
          },
          children: [
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                weight: 'bolder',
                size: 'large'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Fact Sets'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'FactSet',
              children: [
                {
                  type: 'element',
                  tagName: 'Fact',
                  children: [
                    {
                      type: 'element',
                      tagName: 'FactTitle',
                      children: [
                        {
                          type: 'element',
                          tagName: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Fact Title #1'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: 'element',
                      tagName: 'FactValue',
                      children: [
                        {
                          type: 'element',
                          tagName: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Fact Value #1'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'element',
                  tagName: 'Fact',
                  children: [
                    {
                      type: 'element',
                      tagName: 'FactTitle',
                      children: [
                        {
                          type: 'element',
                          tagName: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Fact Title #2'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: 'element',
                      tagName: 'FactValue',
                      children: [
                        {
                          type: 'element',
                          tagName: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Fact Value #2'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: 'element',
                  tagName: 'Fact',
                  children: [
                    {
                      type: 'element',
                      tagName: 'FactTitle',
                      children: [
                        {
                          type: 'element',
                          tagName: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Fact Title #3'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: 'element',
                      tagName: 'FactValue',
                      children: [
                        {
                          type: 'element',
                          tagName: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              value: 'Fact Value #3'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'element',
          tagName: 'Container',
          properties: {
            separator: true
          },
          children: [
            {
              type: 'element',
              tagName: 'TextBlock',
              properties: {
                weight: 'bolder',
                size: 'large'
              },
              children: [
                {
                  type: 'element',
                  tagName: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      value: 'Images'
                    }
                  ]
                }
              ]
            },
            {
              type: 'element',
              tagName: 'ColumnSet',
              children: [
                {
                  type: 'element',
                  tagName: 'Column',
                  properties: {
                    spacing: 'none',
                    separator: false
                  },
                  children: [
                    {
                      type: 'element',
                      tagName: 'Image',
                      properties: {
                        altText: 'Default Variant',
                        url: 'https://via.placeholder.com/182x182?text=Default%20Variant'
                      }
                    }
                  ]
                },
                {
                  type: 'element',
                  tagName: 'Column',
                  children: [
                    {
                      type: 'element',
                      tagName: 'Image',
                      properties: {
                        variant: 'circle',
                        altText: 'Circle Variant',
                        url: 'https://via.placeholder.com/182x182?text=Circle%20Variant'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}

export const SmallKitchenSink = SmallTemplate.bind({})

SmallKitchenSink.args = BaseArgs

export const LargeKitchenSink = LargeTemplate.bind({})

LargeKitchenSink.args = BaseArgs

const NoDetailArgs: SNNotificationDetailScreenProps = {
  onSubmitAction: BaseArgs.onSubmitAction,
  onDelete: BaseArgs.onDelete,
  onOpenUrlAction: BaseArgs.onOpenUrlAction,
  translations: BaseArgs.translations,
  notification: {
    id: 'a84b4bd6-048d-11e9-b464-0a58dfec3472',
    correlationId: '15c80f29-3273-4c3b-bbf1-7db8f045ece2',
    category: 'Important',
    firstSeenDate: null,
    hiddenBefore: '2018-12-20T19:30:06.000Z',
    hiddenAfter: '2018-12-20T19:45:06.000Z',
    dueAt: null,
    actionStatus: 'none_taken',
    actionTakenDate: null,
    actionCompletionDate: null,
    displayLifecycle: 'simple',
    sortValue: '00000000000050000000000000001545334207',
    section: 'toknow',
    priority: 'informational',
    from: {
      name: 'Notification Test',
      iconUrl: 'https://via.placeholder.com/64x64?text=Source%20Image'
    },
    title: {
      type: 'element',
      tagName: 'Title',
      children: [
        {
          type: 'element',
          tagName: 'paragraph',
          children: [
            {
              type: 'text',
              value: 'A smart notification title that is really long'
            }
          ]
        }
      ]
    },
    body: {
      type: 'element',
      tagName: 'Body',
      children: [
        {
          type: 'element',
          tagName: 'paragraph',
          children: [
            {
              type: 'text',
              value:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              type: 'element',
              tagName: 'Date',
              properties: {
                date: '2017-02-14T06:00:00Z',
                format: 'LONG'
              }
            },
            {
              type: 'text',
              value: ' '
            },
            {
              type: 'element',
              tagName: 'link',
              properties: {
                url: 'https://www.workgrid.com'
              },
              children: [
                {
                  type: 'text',
                  value: 'Workgrid'
                }
              ]
            },
            {
              type: 'text',
              value:
                ' It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            }
          ]
        }
      ]
    },
    image: {
      altText: 'Body Image',
      url: 'https://via.placeholder.com/64x64?text=Body%20Image'
    }
  }
}

export const SmallNoDetail = SmallTemplate.bind({})

SmallNoDetail.args = NoDetailArgs

export const LargeNoDetail = LargeTemplate.bind({})

LargeNoDetail.args = NoDetailArgs
