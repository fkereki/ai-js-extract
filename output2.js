const a = {
  type: "File",
  start: 0,
  end: 1302,
  loc: { start: { line: 1, column: 0 }, end: { line: 56, column: 0 } },
  program: {
    type: "Program",
    start: 0,
    end: 1302,
    loc: { start: { line: 1, column: 0 }, end: { line: 56, column: 0 } },
    sourceType: "script",
    interpreter: null,
    body: [
      {
        type: "VariableDeclaration",
        start: 0,
        end: 66,
        loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 66 } },
        declarations: [
          {
            type: "VariableDeclarator",
            start: 4,
            end: 65,
            loc: {
              start: { line: 1, column: 4 },
              end: { line: 1, column: 65 }
            },
            id: {
              type: "Identifier",
              start: 4,
              end: 8,
              loc: {
                start: { line: 1, column: 4 },
                end: { line: 1, column: 8 },
                identifierName: "rows"
              },
              name: "rows"
            },
            init: {
              type: "CallExpression",
              start: 11,
              end: 65,
              loc: {
                start: { line: 1, column: 11 },
                end: { line: 1, column: 65 }
              },
              callee: {
                type: "Identifier",
                start: 11,
                end: 17,
                loc: {
                  start: { line: 1, column: 11 },
                  end: { line: 1, column: 17 },
                  identifierName: "prompt"
                },
                name: "prompt"
              },
              arguments: [
                {
                  type: "StringLiteral",
                  start: 18,
                  end: 64,
                  loc: {
                    start: { line: 1, column: 18 },
                    end: { line: 1, column: 64 }
                  },
                  extra: {
                    rawValue: "How many rows for your multiplication table?",
                    raw: '"How many rows for your multiplication table?"'
                  },
                  value: "How many rows for your multiplication table?"
                }
              ]
            }
          }
        ],
        kind: "var"
      },
      {
        type: "VariableDeclaration",
        start: 67,
        end: 136,
        loc: { start: { line: 2, column: 0 }, end: { line: 2, column: 69 } },
        declarations: [
          {
            type: "VariableDeclarator",
            start: 71,
            end: 135,
            loc: {
              start: { line: 2, column: 4 },
              end: { line: 2, column: 68 }
            },
            id: {
              type: "Identifier",
              start: 71,
              end: 75,
              loc: {
                start: { line: 2, column: 4 },
                end: { line: 2, column: 8 },
                identifierName: "cols"
              },
              name: "cols"
            },
            init: {
              type: "CallExpression",
              start: 78,
              end: 135,
              loc: {
                start: { line: 2, column: 11 },
                end: { line: 2, column: 68 }
              },
              callee: {
                type: "Identifier",
                start: 78,
                end: 84,
                loc: {
                  start: { line: 2, column: 11 },
                  end: { line: 2, column: 17 },
                  identifierName: "prompt"
                },
                name: "prompt"
              },
              arguments: [
                {
                  type: "StringLiteral",
                  start: 85,
                  end: 134,
                  loc: {
                    start: { line: 2, column: 18 },
                    end: { line: 2, column: 67 }
                  },
                  extra: {
                    rawValue: "How many columns for your multiplication table?",
                    raw: '"How many columns for your multiplication table?"'
                  },
                  value: "How many columns for your multiplication table?"
                }
              ]
            }
          }
        ],
        kind: "var",
        trailingComments: [
          {
            type: "CommentBlock",
            value: "\n    Simple comment\n",
            start: 137,
            end: 161,
            loc: { start: { line: 3, column: 0 }, end: { line: 5, column: 2 } }
          }
        ]
      },
      {
        type: "IfStatement",
        start: 162,
        end: 204,
        loc: { start: { line: 6, column: 0 }, end: { line: 6, column: 42 } },
        test: {
          type: "LogicalExpression",
          start: 166,
          end: 192,
          loc: { start: { line: 6, column: 4 }, end: { line: 6, column: 30 } },
          left: {
            type: "BinaryExpression",
            start: 166,
            end: 176,
            loc: {
              start: { line: 6, column: 4 },
              end: { line: 6, column: 14 }
            },
            left: {
              type: "Identifier",
              start: 166,
              end: 170,
              loc: {
                start: { line: 6, column: 4 },
                end: { line: 6, column: 8 },
                identifierName: "rows"
              },
              name: "rows"
            },
            operator: "==",
            right: {
              type: "StringLiteral",
              start: 174,
              end: 176,
              loc: {
                start: { line: 6, column: 12 },
                end: { line: 6, column: 14 }
              },
              extra: { rawValue: "", raw: '""' },
              value: ""
            }
          },
          operator: "||",
          right: {
            type: "BinaryExpression",
            start: 180,
            end: 192,
            loc: {
              start: { line: 6, column: 18 },
              end: { line: 6, column: 30 }
            },
            left: {
              type: "Identifier",
              start: 180,
              end: 184,
              loc: {
                start: { line: 6, column: 18 },
                end: { line: 6, column: 22 },
                identifierName: "rows"
              },
              name: "rows"
            },
            operator: "==",
            right: {
              type: "NullLiteral",
              start: 188,
              end: 192,
              loc: {
                start: { line: 6, column: 26 },
                end: { line: 6, column: 30 }
              }
            }
          }
        },
        consequent: {
          type: "ExpressionStatement",
          start: 194,
          end: 204,
          loc: { start: { line: 6, column: 32 }, end: { line: 6, column: 42 } },
          expression: {
            type: "AssignmentExpression",
            start: 194,
            end: 203,
            loc: {
              start: { line: 6, column: 32 },
              end: { line: 6, column: 41 }
            },
            operator: "=",
            left: {
              type: "Identifier",
              start: 194,
              end: 198,
              loc: {
                start: { line: 6, column: 32 },
                end: { line: 6, column: 36 },
                identifierName: "rows"
              },
              name: "rows"
            },
            right: {
              type: "NumericLiteral",
              start: 201,
              end: 203,
              loc: {
                start: { line: 6, column: 39 },
                end: { line: 6, column: 41 }
              },
              extra: { rawValue: 10, raw: "10" },
              value: 10
            }
          }
        },
        alternate: null,
        leadingComments: [
          {
            type: "CommentBlock",
            value: "\n    Simple comment\n",
            start: 137,
            end: 161,
            loc: { start: { line: 3, column: 0 }, end: { line: 5, column: 2 } }
          }
        ]
      },
      {
        type: "IfStatement",
        start: 205,
        end: 247,
        loc: { start: { line: 7, column: 0 }, end: { line: 7, column: 42 } },
        test: {
          type: "LogicalExpression",
          start: 209,
          end: 235,
          loc: { start: { line: 7, column: 4 }, end: { line: 7, column: 30 } },
          left: {
            type: "BinaryExpression",
            start: 209,
            end: 219,
            loc: {
              start: { line: 7, column: 4 },
              end: { line: 7, column: 14 }
            },
            left: {
              type: "Identifier",
              start: 209,
              end: 213,
              loc: {
                start: { line: 7, column: 4 },
                end: { line: 7, column: 8 },
                identifierName: "cols"
              },
              name: "cols"
            },
            operator: "==",
            right: {
              type: "StringLiteral",
              start: 217,
              end: 219,
              loc: {
                start: { line: 7, column: 12 },
                end: { line: 7, column: 14 }
              },
              extra: { rawValue: "", raw: '""' },
              value: ""
            }
          },
          operator: "||",
          right: {
            type: "BinaryExpression",
            start: 223,
            end: 235,
            loc: {
              start: { line: 7, column: 18 },
              end: { line: 7, column: 30 }
            },
            left: {
              type: "Identifier",
              start: 223,
              end: 227,
              loc: {
                start: { line: 7, column: 18 },
                end: { line: 7, column: 22 },
                identifierName: "cols"
              },
              name: "cols"
            },
            operator: "==",
            right: {
              type: "NullLiteral",
              start: 231,
              end: 235,
              loc: {
                start: { line: 7, column: 26 },
                end: { line: 7, column: 30 }
              }
            }
          }
        },
        consequent: {
          type: "ExpressionStatement",
          start: 237,
          end: 247,
          loc: { start: { line: 7, column: 32 }, end: { line: 7, column: 42 } },
          expression: {
            type: "AssignmentExpression",
            start: 237,
            end: 246,
            loc: {
              start: { line: 7, column: 32 },
              end: { line: 7, column: 41 }
            },
            operator: "=",
            left: {
              type: "Identifier",
              start: 237,
              end: 241,
              loc: {
                start: { line: 7, column: 32 },
                end: { line: 7, column: 36 },
                identifierName: "cols"
              },
              name: "cols"
            },
            right: {
              type: "NumericLiteral",
              start: 244,
              end: 246,
              loc: {
                start: { line: 7, column: 39 },
                end: { line: 7, column: 41 }
              },
              extra: { rawValue: 10, raw: "10" },
              value: 10
            }
          }
        },
        alternate: null
      },
      {
        type: "ExpressionStatement",
        start: 248,
        end: 272,
        loc: { start: { line: 8, column: 0 }, end: { line: 8, column: 24 } },
        expression: {
          type: "CallExpression",
          start: 248,
          end: 271,
          loc: { start: { line: 8, column: 0 }, end: { line: 8, column: 23 } },
          callee: {
            type: "Identifier",
            start: 248,
            end: 259,
            loc: {
              start: { line: 8, column: 0 },
              end: { line: 8, column: 11 },
              identifierName: "createTable"
            },
            name: "createTable"
          },
          arguments: [
            {
              type: "Identifier",
              start: 260,
              end: 264,
              loc: {
                start: { line: 8, column: 12 },
                end: { line: 8, column: 16 },
                identifierName: "rows"
              },
              name: "rows"
            },
            {
              type: "Identifier",
              start: 266,
              end: 270,
              loc: {
                start: { line: 8, column: 18 },
                end: { line: 8, column: 22 },
                identifierName: "cols"
              },
              name: "cols"
            }
          ]
        },
        trailingComments: [
          {
            type: "CommentBlock",
            value:
              "*\n *  Create a table with so many\n *  rows and cols, calculated\n *  somehow...\n ",
            start: 274,
            end: 358,
            loc: {
              start: { line: 10, column: 0 },
              end: { line: 14, column: 3 }
            }
          }
        ]
      },
      {
        type: "FunctionDeclaration",
        start: 359,
        end: 795,
        loc: { start: { line: 15, column: 0 }, end: { line: 29, column: 1 } },
        id: {
          type: "Identifier",
          start: 368,
          end: 379,
          loc: {
            start: { line: 15, column: 9 },
            end: { line: 15, column: 20 },
            identifierName: "createTable"
          },
          name: "createTable"
        },
        generator: false,
        async: false,
        params: [
          {
            type: "Identifier",
            start: 380,
            end: 384,
            loc: {
              start: { line: 15, column: 21 },
              end: { line: 15, column: 25 },
              identifierName: "rows"
            },
            name: "rows"
          },
          {
            type: "Identifier",
            start: 386,
            end: 390,
            loc: {
              start: { line: 15, column: 27 },
              end: { line: 15, column: 31 },
              identifierName: "cols"
            },
            name: "cols"
          }
        ],
        body: {
          type: "BlockStatement",
          start: 392,
          end: 795,
          loc: {
            start: { line: 15, column: 33 },
            end: { line: 29, column: 1 }
          },
          body: [
            {
              type: "VariableDeclaration",
              start: 398,
              end: 408,
              loc: {
                start: { line: 16, column: 4 },
                end: { line: 16, column: 14 }
              },
              declarations: [
                {
                  type: "VariableDeclarator",
                  start: 402,
                  end: 407,
                  loc: {
                    start: { line: 16, column: 8 },
                    end: { line: 16, column: 13 }
                  },
                  id: {
                    type: "Identifier",
                    start: 402,
                    end: 403,
                    loc: {
                      start: { line: 16, column: 8 },
                      end: { line: 16, column: 9 },
                      identifierName: "j"
                    },
                    name: "j"
                  },
                  init: {
                    type: "NumericLiteral",
                    start: 406,
                    end: 407,
                    loc: {
                      start: { line: 16, column: 12 },
                      end: { line: 16, column: 13 }
                    },
                    extra: { rawValue: 1, raw: "1" },
                    value: 1
                  }
                }
              ],
              kind: "var"
            },
            {
              type: "VariableDeclaration",
              start: 413,
              end: 490,
              loc: {
                start: { line: 17, column: 4 },
                end: { line: 17, column: 81 }
              },
              declarations: [
                {
                  type: "VariableDeclarator",
                  start: 417,
                  end: 489,
                  loc: {
                    start: { line: 17, column: 8 },
                    end: { line: 17, column: 80 }
                  },
                  id: {
                    type: "Identifier",
                    start: 417,
                    end: 423,
                    loc: {
                      start: { line: 17, column: 8 },
                      end: { line: 17, column: 14 },
                      identifierName: "output"
                    },
                    name: "output"
                  },
                  init: {
                    type: "StringLiteral",
                    start: 426,
                    end: 489,
                    loc: {
                      start: { line: 17, column: 17 },
                      end: { line: 17, column: 80 }
                    },
                    extra: {
                      rawValue:
                        "<table border='1' width='500' cellspacing='0'cellpadding='5'>",
                      raw:
                        "\"<table border='1' width='500' cellspacing='0'cellpadding='5'>\""
                    },
                    value:
                      "<table border='1' width='500' cellspacing='0'cellpadding='5'>"
                  }
                }
              ],
              kind: "var"
            },
            {
              type: "ForStatement",
              start: 495,
              end: 731,
              loc: {
                start: { line: 18, column: 4 },
                end: { line: 26, column: 5 }
              },
              init: {
                type: "AssignmentExpression",
                start: 500,
                end: 505,
                loc: {
                  start: { line: 18, column: 9 },
                  end: { line: 18, column: 14 }
                },
                operator: "=",
                left: {
                  type: "Identifier",
                  start: 500,
                  end: 501,
                  loc: {
                    start: { line: 18, column: 9 },
                    end: { line: 18, column: 10 },
                    identifierName: "i"
                  },
                  name: "i"
                },
                right: {
                  type: "NumericLiteral",
                  start: 504,
                  end: 505,
                  loc: {
                    start: { line: 18, column: 13 },
                    end: { line: 18, column: 14 }
                  },
                  extra: { rawValue: 1, raw: "1" },
                  value: 1
                }
              },
              test: {
                type: "BinaryExpression",
                start: 507,
                end: 516,
                loc: {
                  start: { line: 18, column: 16 },
                  end: { line: 18, column: 25 }
                },
                left: {
                  type: "Identifier",
                  start: 507,
                  end: 508,
                  loc: {
                    start: { line: 18, column: 16 },
                    end: { line: 18, column: 17 },
                    identifierName: "i"
                  },
                  name: "i"
                },
                operator: "<=",
                right: {
                  type: "Identifier",
                  start: 512,
                  end: 516,
                  loc: {
                    start: { line: 18, column: 21 },
                    end: { line: 18, column: 25 },
                    identifierName: "rows"
                  },
                  name: "rows"
                }
              },
              update: {
                type: "UpdateExpression",
                start: 518,
                end: 521,
                loc: {
                  start: { line: 18, column: 27 },
                  end: { line: 18, column: 30 }
                },
                operator: "++",
                prefix: false,
                argument: {
                  type: "Identifier",
                  start: 518,
                  end: 519,
                  loc: {
                    start: { line: 18, column: 27 },
                    end: { line: 18, column: 28 },
                    identifierName: "i"
                  },
                  name: "i"
                }
              },
              body: {
                type: "BlockStatement",
                start: 523,
                end: 731,
                loc: {
                  start: { line: 18, column: 32 },
                  end: { line: 26, column: 5 }
                },
                body: [
                  {
                    type: "ExpressionStatement",
                    start: 533,
                    end: 558,
                    loc: {
                      start: { line: 19, column: 8 },
                      end: { line: 19, column: 33 }
                    },
                    expression: {
                      type: "AssignmentExpression",
                      start: 533,
                      end: 557,
                      loc: {
                        start: { line: 19, column: 8 },
                        end: { line: 19, column: 32 }
                      },
                      operator: "=",
                      left: {
                        type: "Identifier",
                        start: 533,
                        end: 539,
                        loc: {
                          start: { line: 19, column: 8 },
                          end: { line: 19, column: 14 },
                          identifierName: "output"
                        },
                        name: "output"
                      },
                      right: {
                        type: "BinaryExpression",
                        start: 542,
                        end: 557,
                        loc: {
                          start: { line: 19, column: 17 },
                          end: { line: 19, column: 32 }
                        },
                        left: {
                          type: "Identifier",
                          start: 542,
                          end: 548,
                          loc: {
                            start: { line: 19, column: 17 },
                            end: { line: 19, column: 23 },
                            identifierName: "output"
                          },
                          name: "output"
                        },
                        operator: "+",
                        right: {
                          type: "StringLiteral",
                          start: 551,
                          end: 557,
                          loc: {
                            start: { line: 19, column: 26 },
                            end: { line: 19, column: 32 }
                          },
                          extra: { rawValue: "<tr>", raw: '"<tr>"' },
                          value: "<tr>"
                        }
                      }
                    }
                  },
                  {
                    type: "WhileStatement",
                    start: 567,
                    end: 675,
                    loc: {
                      start: { line: 20, column: 8 },
                      end: { line: 23, column: 9 }
                    },
                    test: {
                      type: "BinaryExpression",
                      start: 574,
                      end: 583,
                      loc: {
                        start: { line: 20, column: 15 },
                        end: { line: 20, column: 24 }
                      },
                      left: {
                        type: "Identifier",
                        start: 574,
                        end: 575,
                        loc: {
                          start: { line: 20, column: 15 },
                          end: { line: 20, column: 16 },
                          identifierName: "j"
                        },
                        name: "j"
                      },
                      operator: "<=",
                      right: {
                        type: "Identifier",
                        start: 579,
                        end: 583,
                        loc: {
                          start: { line: 20, column: 20 },
                          end: { line: 20, column: 24 },
                          identifierName: "cols"
                        },
                        name: "cols"
                      }
                    },
                    body: {
                      type: "BlockStatement",
                      start: 585,
                      end: 675,
                      loc: {
                        start: { line: 20, column: 26 },
                        end: { line: 23, column: 9 }
                      },
                      body: [
                        {
                          type: "ExpressionStatement",
                          start: 599,
                          end: 642,
                          loc: {
                            start: { line: 21, column: 12 },
                            end: { line: 21, column: 55 }
                          },
                          expression: {
                            type: "AssignmentExpression",
                            start: 599,
                            end: 641,
                            loc: {
                              start: { line: 21, column: 12 },
                              end: { line: 21, column: 54 }
                            },
                            operator: "=",
                            left: {
                              type: "Identifier",
                              start: 599,
                              end: 605,
                              loc: {
                                start: { line: 21, column: 12 },
                                end: { line: 21, column: 18 },
                                identifierName: "output"
                              },
                              name: "output"
                            },
                            right: {
                              type: "BinaryExpression",
                              start: 608,
                              end: 641,
                              loc: {
                                start: { line: 21, column: 21 },
                                end: { line: 21, column: 54 }
                              },
                              left: {
                                type: "BinaryExpression",
                                start: 608,
                                end: 631,
                                loc: {
                                  start: { line: 21, column: 21 },
                                  end: { line: 21, column: 44 }
                                },
                                left: {
                                  type: "BinaryExpression",
                                  start: 608,
                                  end: 623,
                                  loc: {
                                    start: { line: 21, column: 21 },
                                    end: { line: 21, column: 36 }
                                  },
                                  left: {
                                    type: "Identifier",
                                    start: 608,
                                    end: 614,
                                    loc: {
                                      start: { line: 21, column: 21 },
                                      end: { line: 21, column: 27 },
                                      identifierName: "output"
                                    },
                                    name: "output"
                                  },
                                  operator: "+",
                                  right: {
                                    type: "StringLiteral",
                                    start: 617,
                                    end: 623,
                                    loc: {
                                      start: { line: 21, column: 30 },
                                      end: { line: 21, column: 36 }
                                    },
                                    extra: { rawValue: "<td>", raw: '"<td>"' },
                                    value: "<td>"
                                  }
                                },
                                operator: "+",
                                right: {
                                  type: "BinaryExpression",
                                  start: 626,
                                  end: 631,
                                  loc: {
                                    start: { line: 21, column: 39 },
                                    end: { line: 21, column: 44 }
                                  },
                                  left: {
                                    type: "Identifier",
                                    start: 626,
                                    end: 627,
                                    loc: {
                                      start: { line: 21, column: 39 },
                                      end: { line: 21, column: 40 },
                                      identifierName: "i"
                                    },
                                    name: "i"
                                  },
                                  operator: "*",
                                  right: {
                                    type: "Identifier",
                                    start: 630,
                                    end: 631,
                                    loc: {
                                      start: { line: 21, column: 43 },
                                      end: { line: 21, column: 44 },
                                      identifierName: "j"
                                    },
                                    name: "j"
                                  }
                                }
                              },
                              operator: "+",
                              right: {
                                type: "StringLiteral",
                                start: 634,
                                end: 641,
                                loc: {
                                  start: { line: 21, column: 47 },
                                  end: { line: 21, column: 54 }
                                },
                                extra: { rawValue: "</td>", raw: '"</td>"' },
                                value: "</td>"
                              }
                            }
                          }
                        },
                        {
                          type: "ExpressionStatement",
                          start: 655,
                          end: 665,
                          loc: {
                            start: { line: 22, column: 12 },
                            end: { line: 22, column: 22 }
                          },
                          expression: {
                            type: "AssignmentExpression",
                            start: 655,
                            end: 664,
                            loc: {
                              start: { line: 22, column: 12 },
                              end: { line: 22, column: 21 }
                            },
                            operator: "=",
                            left: {
                              type: "Identifier",
                              start: 655,
                              end: 656,
                              loc: {
                                start: { line: 22, column: 12 },
                                end: { line: 22, column: 13 },
                                identifierName: "j"
                              },
                              name: "j"
                            },
                            right: {
                              type: "BinaryExpression",
                              start: 659,
                              end: 664,
                              loc: {
                                start: { line: 22, column: 16 },
                                end: { line: 22, column: 21 }
                              },
                              left: {
                                type: "Identifier",
                                start: 659,
                                end: 660,
                                loc: {
                                  start: { line: 22, column: 16 },
                                  end: { line: 22, column: 17 },
                                  identifierName: "j"
                                },
                                name: "j"
                              },
                              operator: "+",
                              right: {
                                type: "NumericLiteral",
                                start: 663,
                                end: 664,
                                loc: {
                                  start: { line: 22, column: 20 },
                                  end: { line: 22, column: 21 }
                                },
                                extra: { rawValue: 1, raw: "1" },
                                value: 1
                              }
                            }
                          }
                        }
                      ],
                      directives: []
                    }
                  },
                  {
                    type: "ExpressionStatement",
                    start: 684,
                    end: 710,
                    loc: {
                      start: { line: 24, column: 8 },
                      end: { line: 24, column: 34 }
                    },
                    expression: {
                      type: "AssignmentExpression",
                      start: 684,
                      end: 709,
                      loc: {
                        start: { line: 24, column: 8 },
                        end: { line: 24, column: 33 }
                      },
                      operator: "=",
                      left: {
                        type: "Identifier",
                        start: 684,
                        end: 690,
                        loc: {
                          start: { line: 24, column: 8 },
                          end: { line: 24, column: 14 },
                          identifierName: "output"
                        },
                        name: "output"
                      },
                      right: {
                        type: "BinaryExpression",
                        start: 693,
                        end: 709,
                        loc: {
                          start: { line: 24, column: 17 },
                          end: { line: 24, column: 33 }
                        },
                        left: {
                          type: "Identifier",
                          start: 693,
                          end: 699,
                          loc: {
                            start: { line: 24, column: 17 },
                            end: { line: 24, column: 23 },
                            identifierName: "output"
                          },
                          name: "output"
                        },
                        operator: "+",
                        right: {
                          type: "StringLiteral",
                          start: 702,
                          end: 709,
                          loc: {
                            start: { line: 24, column: 26 },
                            end: { line: 24, column: 33 }
                          },
                          extra: { rawValue: "</tr>", raw: '"</tr>"' },
                          value: "</tr>"
                        }
                      }
                    }
                  },
                  {
                    type: "ExpressionStatement",
                    start: 719,
                    end: 725,
                    loc: {
                      start: { line: 25, column: 8 },
                      end: { line: 25, column: 14 }
                    },
                    expression: {
                      type: "AssignmentExpression",
                      start: 719,
                      end: 724,
                      loc: {
                        start: { line: 25, column: 8 },
                        end: { line: 25, column: 13 }
                      },
                      operator: "=",
                      left: {
                        type: "Identifier",
                        start: 719,
                        end: 720,
                        loc: {
                          start: { line: 25, column: 8 },
                          end: { line: 25, column: 9 },
                          identifierName: "j"
                        },
                        name: "j"
                      },
                      right: {
                        type: "NumericLiteral",
                        start: 723,
                        end: 724,
                        loc: {
                          start: { line: 25, column: 12 },
                          end: { line: 25, column: 13 }
                        },
                        extra: { rawValue: 1, raw: "1" },
                        value: 1
                      }
                    }
                  }
                ],
                directives: []
              }
            },
            {
              type: "ExpressionStatement",
              start: 736,
              end: 765,
              loc: {
                start: { line: 27, column: 4 },
                end: { line: 27, column: 33 }
              },
              expression: {
                type: "AssignmentExpression",
                start: 736,
                end: 764,
                loc: {
                  start: { line: 27, column: 4 },
                  end: { line: 27, column: 32 }
                },
                operator: "=",
                left: {
                  type: "Identifier",
                  start: 736,
                  end: 742,
                  loc: {
                    start: { line: 27, column: 4 },
                    end: { line: 27, column: 10 },
                    identifierName: "output"
                  },
                  name: "output"
                },
                right: {
                  type: "BinaryExpression",
                  start: 745,
                  end: 764,
                  loc: {
                    start: { line: 27, column: 13 },
                    end: { line: 27, column: 32 }
                  },
                  left: {
                    type: "Identifier",
                    start: 745,
                    end: 751,
                    loc: {
                      start: { line: 27, column: 13 },
                      end: { line: 27, column: 19 },
                      identifierName: "output"
                    },
                    name: "output"
                  },
                  operator: "+",
                  right: {
                    type: "StringLiteral",
                    start: 754,
                    end: 764,
                    loc: {
                      start: { line: 27, column: 22 },
                      end: { line: 27, column: 32 }
                    },
                    extra: { rawValue: "</table>", raw: '"</table>"' },
                    value: "</table>"
                  }
                }
              }
            },
            {
              type: "ExpressionStatement",
              start: 770,
              end: 793,
              loc: {
                start: { line: 28, column: 4 },
                end: { line: 28, column: 27 }
              },
              expression: {
                type: "CallExpression",
                start: 770,
                end: 792,
                loc: {
                  start: { line: 28, column: 4 },
                  end: { line: 28, column: 26 }
                },
                callee: {
                  type: "MemberExpression",
                  start: 770,
                  end: 784,
                  loc: {
                    start: { line: 28, column: 4 },
                    end: { line: 28, column: 18 }
                  },
                  object: {
                    type: "Identifier",
                    start: 770,
                    end: 778,
                    loc: {
                      start: { line: 28, column: 4 },
                      end: { line: 28, column: 12 },
                      identifierName: "document"
                    },
                    name: "document"
                  },
                  property: {
                    type: "Identifier",
                    start: 779,
                    end: 784,
                    loc: {
                      start: { line: 28, column: 13 },
                      end: { line: 28, column: 18 },
                      identifierName: "write"
                    },
                    name: "write"
                  },
                  computed: false
                },
                arguments: [
                  {
                    type: "Identifier",
                    start: 785,
                    end: 791,
                    loc: {
                      start: { line: 28, column: 19 },
                      end: { line: 28, column: 25 },
                      identifierName: "output"
                    },
                    name: "output"
                  }
                ]
              }
            }
          ],
          directives: []
        },
        leadingComments: [
          {
            type: "CommentBlock",
            value:
              "*\n *  Create a table with so many\n *  rows and cols, calculated\n *  somehow...\n ",
            start: 274,
            end: 358,
            loc: {
              start: { line: 10, column: 0 },
              end: { line: 14, column: 3 }
            }
          }
        ]
      },
      {
        type: "ClassDeclaration",
        start: 797,
        end: 1228,
        loc: { start: { line: 31, column: 0 }, end: { line: 51, column: 1 } },
        id: {
          type: "Identifier",
          start: 803,
          end: 812,
          loc: {
            start: { line: 31, column: 6 },
            end: { line: 31, column: 15 },
            identifierName: "Rectangle"
          },
          name: "Rectangle"
        },
        superClass: null,
        body: {
          type: "ClassBody",
          start: 813,
          end: 1228,
          loc: {
            start: { line: 31, column: 16 },
            end: { line: 51, column: 1 }
          },
          body: [
            {
              type: "ClassMethod",
              start: 948,
              end: 1040,
              loc: {
                start: { line: 36, column: 4 },
                end: { line: 39, column: 5 }
              },
              static: false,
              key: {
                type: "Identifier",
                start: 948,
                end: 959,
                loc: {
                  start: { line: 36, column: 4 },
                  end: { line: 36, column: 15 },
                  identifierName: "constructor"
                },
                name: "constructor"
              },
              computed: false,
              kind: "constructor",
              id: null,
              generator: false,
              async: false,
              params: [
                {
                  type: "Identifier",
                  start: 960,
                  end: 966,
                  loc: {
                    start: { line: 36, column: 16 },
                    end: { line: 36, column: 22 },
                    identifierName: "height"
                  },
                  name: "height"
                },
                {
                  type: "Identifier",
                  start: 968,
                  end: 973,
                  loc: {
                    start: { line: 36, column: 24 },
                    end: { line: 36, column: 29 },
                    identifierName: "width"
                  },
                  name: "width"
                }
              ],
              body: {
                type: "BlockStatement",
                start: 975,
                end: 1040,
                loc: {
                  start: { line: 36, column: 31 },
                  end: { line: 39, column: 5 }
                },
                body: [
                  {
                    type: "ExpressionStatement",
                    start: 985,
                    end: 1006,
                    loc: {
                      start: { line: 37, column: 8 },
                      end: { line: 37, column: 29 }
                    },
                    expression: {
                      type: "AssignmentExpression",
                      start: 985,
                      end: 1005,
                      loc: {
                        start: { line: 37, column: 8 },
                        end: { line: 37, column: 28 }
                      },
                      operator: "=",
                      left: {
                        type: "MemberExpression",
                        start: 985,
                        end: 996,
                        loc: {
                          start: { line: 37, column: 8 },
                          end: { line: 37, column: 19 }
                        },
                        object: {
                          type: "ThisExpression",
                          start: 985,
                          end: 989,
                          loc: {
                            start: { line: 37, column: 8 },
                            end: { line: 37, column: 12 }
                          }
                        },
                        property: {
                          type: "Identifier",
                          start: 990,
                          end: 996,
                          loc: {
                            start: { line: 37, column: 13 },
                            end: { line: 37, column: 19 },
                            identifierName: "height"
                          },
                          name: "height"
                        },
                        computed: false
                      },
                      right: {
                        type: "Identifier",
                        start: 999,
                        end: 1005,
                        loc: {
                          start: { line: 37, column: 22 },
                          end: { line: 37, column: 28 },
                          identifierName: "height"
                        },
                        name: "height"
                      }
                    }
                  },
                  {
                    type: "ExpressionStatement",
                    start: 1015,
                    end: 1034,
                    loc: {
                      start: { line: 38, column: 8 },
                      end: { line: 38, column: 27 }
                    },
                    expression: {
                      type: "AssignmentExpression",
                      start: 1015,
                      end: 1033,
                      loc: {
                        start: { line: 38, column: 8 },
                        end: { line: 38, column: 26 }
                      },
                      operator: "=",
                      left: {
                        type: "MemberExpression",
                        start: 1015,
                        end: 1025,
                        loc: {
                          start: { line: 38, column: 8 },
                          end: { line: 38, column: 18 }
                        },
                        object: {
                          type: "ThisExpression",
                          start: 1015,
                          end: 1019,
                          loc: {
                            start: { line: 38, column: 8 },
                            end: { line: 38, column: 12 }
                          }
                        },
                        property: {
                          type: "Identifier",
                          start: 1020,
                          end: 1025,
                          loc: {
                            start: { line: 38, column: 13 },
                            end: { line: 38, column: 18 },
                            identifierName: "width"
                          },
                          name: "width"
                        },
                        computed: false
                      },
                      right: {
                        type: "Identifier",
                        start: 1028,
                        end: 1033,
                        loc: {
                          start: { line: 38, column: 21 },
                          end: { line: 38, column: 26 },
                          identifierName: "width"
                        },
                        name: "width"
                      }
                    }
                  }
                ],
                directives: []
              },
              leadingComments: [
                {
                  type: "CommentBlock",
                  value:
                    "*\n     * @param height - The height of the rectangle to construct\n     * @param width - The width of the rectangle\n     ",
                  start: 819,
                  end: 943,
                  loc: {
                    start: { line: 32, column: 4 },
                    end: { line: 35, column: 7 }
                  }
                }
              ]
            },
            {
              type: "ClassMethod",
              start: 1046,
              end: 1096,
              loc: {
                start: { line: 41, column: 4 },
                end: { line: 43, column: 5 }
              },
              static: false,
              key: {
                type: "Identifier",
                start: 1050,
                end: 1054,
                loc: {
                  start: { line: 41, column: 8 },
                  end: { line: 41, column: 12 },
                  identifierName: "area"
                },
                name: "area"
              },
              computed: false,
              kind: "get",
              id: null,
              generator: false,
              async: false,
              params: [],
              body: {
                type: "BlockStatement",
                start: 1057,
                end: 1096,
                loc: {
                  start: { line: 41, column: 15 },
                  end: { line: 43, column: 5 }
                },
                body: [
                  {
                    type: "ReturnStatement",
                    start: 1067,
                    end: 1090,
                    loc: {
                      start: { line: 42, column: 8 },
                      end: { line: 42, column: 31 }
                    },
                    argument: {
                      type: "CallExpression",
                      start: 1074,
                      end: 1089,
                      loc: {
                        start: { line: 42, column: 15 },
                        end: { line: 42, column: 30 }
                      },
                      callee: {
                        type: "MemberExpression",
                        start: 1074,
                        end: 1087,
                        loc: {
                          start: { line: 42, column: 15 },
                          end: { line: 42, column: 28 }
                        },
                        object: {
                          type: "ThisExpression",
                          start: 1074,
                          end: 1078,
                          loc: {
                            start: { line: 42, column: 15 },
                            end: { line: 42, column: 19 }
                          }
                        },
                        property: {
                          type: "Identifier",
                          start: 1079,
                          end: 1087,
                          loc: {
                            start: { line: 42, column: 20 },
                            end: { line: 42, column: 28 },
                            identifierName: "calcArea"
                          },
                          name: "calcArea"
                        },
                        computed: false
                      },
                      arguments: []
                    }
                  }
                ],
                directives: []
              },
              trailingComments: [
                {
                  type: "CommentBlock",
                  value:
                    "*\n     * Get the area of the constructed rectangle\n     ",
                  start: 1102,
                  end: 1162,
                  loc: {
                    start: { line: 45, column: 4 },
                    end: { line: 47, column: 7 }
                  }
                }
              ]
            },
            {
              type: "ClassMethod",
              start: 1167,
              end: 1226,
              loc: {
                start: { line: 48, column: 4 },
                end: { line: 50, column: 5 }
              },
              static: false,
              key: {
                type: "Identifier",
                start: 1167,
                end: 1175,
                loc: {
                  start: { line: 48, column: 4 },
                  end: { line: 48, column: 12 },
                  identifierName: "calcArea"
                },
                name: "calcArea"
              },
              computed: false,
              kind: "method",
              id: null,
              generator: false,
              async: false,
              params: [],
              body: {
                type: "BlockStatement",
                start: 1178,
                end: 1226,
                loc: {
                  start: { line: 48, column: 15 },
                  end: { line: 50, column: 5 }
                },
                body: [
                  {
                    type: "ReturnStatement",
                    start: 1188,
                    end: 1220,
                    loc: {
                      start: { line: 49, column: 8 },
                      end: { line: 49, column: 40 }
                    },
                    argument: {
                      type: "BinaryExpression",
                      start: 1195,
                      end: 1219,
                      loc: {
                        start: { line: 49, column: 15 },
                        end: { line: 49, column: 39 }
                      },
                      left: {
                        type: "MemberExpression",
                        start: 1195,
                        end: 1206,
                        loc: {
                          start: { line: 49, column: 15 },
                          end: { line: 49, column: 26 }
                        },
                        object: {
                          type: "ThisExpression",
                          start: 1195,
                          end: 1199,
                          loc: {
                            start: { line: 49, column: 15 },
                            end: { line: 49, column: 19 }
                          }
                        },
                        property: {
                          type: "Identifier",
                          start: 1200,
                          end: 1206,
                          loc: {
                            start: { line: 49, column: 20 },
                            end: { line: 49, column: 26 },
                            identifierName: "height"
                          },
                          name: "height"
                        },
                        computed: false
                      },
                      operator: "*",
                      right: {
                        type: "MemberExpression",
                        start: 1209,
                        end: 1219,
                        loc: {
                          start: { line: 49, column: 29 },
                          end: { line: 49, column: 39 }
                        },
                        object: {
                          type: "ThisExpression",
                          start: 1209,
                          end: 1213,
                          loc: {
                            start: { line: 49, column: 29 },
                            end: { line: 49, column: 33 }
                          }
                        },
                        property: {
                          type: "Identifier",
                          start: 1214,
                          end: 1219,
                          loc: {
                            start: { line: 49, column: 34 },
                            end: { line: 49, column: 39 },
                            identifierName: "width"
                          },
                          name: "width"
                        },
                        computed: false
                      }
                    }
                  }
                ],
                directives: []
              },
              leadingComments: [
                {
                  type: "CommentBlock",
                  value:
                    "*\n     * Get the area of the constructed rectangle\n     ",
                  start: 1102,
                  end: 1162,
                  loc: {
                    start: { line: 45, column: 4 },
                    end: { line: 47, column: 7 }
                  }
                }
              ]
            }
          ]
        }
      },
      {
        type: "VariableDeclaration",
        start: 1230,
        end: 1267,
        loc: { start: { line: 53, column: 0 }, end: { line: 53, column: 37 } },
        declarations: [
          {
            type: "VariableDeclarator",
            start: 1236,
            end: 1266,
            loc: {
              start: { line: 53, column: 6 },
              end: { line: 53, column: 36 }
            },
            id: {
              type: "Identifier",
              start: 1236,
              end: 1242,
              loc: {
                start: { line: 53, column: 6 },
                end: { line: 53, column: 12 },
                identifierName: "square"
              },
              name: "square"
            },
            init: {
              type: "NewExpression",
              start: 1245,
              end: 1266,
              loc: {
                start: { line: 53, column: 15 },
                end: { line: 53, column: 36 }
              },
              callee: {
                type: "Identifier",
                start: 1249,
                end: 1258,
                loc: {
                  start: { line: 53, column: 19 },
                  end: { line: 53, column: 28 },
                  identifierName: "Rectangle"
                },
                name: "Rectangle"
              },
              arguments: [
                {
                  type: "NumericLiteral",
                  start: 1259,
                  end: 1261,
                  loc: {
                    start: { line: 53, column: 29 },
                    end: { line: 53, column: 31 }
                  },
                  extra: { rawValue: 10, raw: "10" },
                  value: 10
                },
                {
                  type: "NumericLiteral",
                  start: 1263,
                  end: 1265,
                  loc: {
                    start: { line: 53, column: 33 },
                    end: { line: 53, column: 35 }
                  },
                  extra: { rawValue: 10, raw: "10" },
                  value: 10
                }
              ]
            }
          }
        ],
        kind: "const"
      },
      {
        type: "ExpressionStatement",
        start: 1269,
        end: 1294,
        loc: { start: { line: 55, column: 0 }, end: { line: 55, column: 25 } },
        expression: {
          type: "CallExpression",
          start: 1269,
          end: 1293,
          loc: {
            start: { line: 55, column: 0 },
            end: { line: 55, column: 24 }
          },
          callee: {
            type: "MemberExpression",
            start: 1269,
            end: 1280,
            loc: {
              start: { line: 55, column: 0 },
              end: { line: 55, column: 11 }
            },
            object: {
              type: "Identifier",
              start: 1269,
              end: 1276,
              loc: {
                start: { line: 55, column: 0 },
                end: { line: 55, column: 7 },
                identifierName: "console"
              },
              name: "console"
            },
            property: {
              type: "Identifier",
              start: 1277,
              end: 1280,
              loc: {
                start: { line: 55, column: 8 },
                end: { line: 55, column: 11 },
                identifierName: "log"
              },
              name: "log"
            },
            computed: false
          },
          arguments: [
            {
              type: "MemberExpression",
              start: 1281,
              end: 1292,
              loc: {
                start: { line: 55, column: 12 },
                end: { line: 55, column: 23 }
              },
              object: {
                type: "Identifier",
                start: 1281,
                end: 1287,
                loc: {
                  start: { line: 55, column: 12 },
                  end: { line: 55, column: 18 },
                  identifierName: "square"
                },
                name: "square"
              },
              property: {
                type: "Identifier",
                start: 1288,
                end: 1292,
                loc: {
                  start: { line: 55, column: 19 },
                  end: { line: 55, column: 23 },
                  identifierName: "area"
                },
                name: "area"
              },
              computed: false
            }
          ]
        },
        trailingComments: [
          {
            type: "CommentLine",
            value: " 100",
            start: 1295,
            end: 1301,
            loc: {
              start: { line: 55, column: 26 },
              end: { line: 55, column: 32 }
            }
          }
        ]
      }
    ],
    directives: []
  },
  comments: [
    {
      type: "CommentBlock",
      value: "\n    Simple comment\n",
      start: 137,
      end: 161,
      loc: { start: { line: 3, column: 0 }, end: { line: 5, column: 2 } }
    },
    {
      type: "CommentBlock",
      value:
        "*\n *  Create a table with so many\n *  rows and cols, calculated\n *  somehow...\n ",
      start: 274,
      end: 358,
      loc: { start: { line: 10, column: 0 }, end: { line: 14, column: 3 } }
    },
    {
      type: "CommentBlock",
      value:
        "*\n     * @param height - The height of the rectangle to construct\n     * @param width - The width of the rectangle\n     ",
      start: 819,
      end: 943,
      loc: { start: { line: 32, column: 4 }, end: { line: 35, column: 7 } }
    },
    {
      type: "CommentBlock",
      value: "*\n     * Get the area of the constructed rectangle\n     ",
      start: 1102,
      end: 1162,
      loc: { start: { line: 45, column: 4 }, end: { line: 47, column: 7 } }
    },
    {
      type: "CommentLine",
      value: " 100",
      start: 1295,
      end: 1301,
      loc: { start: { line: 55, column: 26 }, end: { line: 55, column: 32 } }
    }
  ]
};
