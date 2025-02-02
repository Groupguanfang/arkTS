/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit ArkUI
 */
/**
 * Provides an interface for writing texts.
 *
 * @interface TextInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides an interface for writing texts.
 *
 * @interface TextInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Provides an interface for writing texts.
 *
 * @interface TextInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Provides an interface for writing texts.
 *
 * @interface TextInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface TextInterface {
    /**
     * Called when writing text.
     *
     * @param { string | Resource } content
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when writing text.
     *
     * @param { string | Resource } content
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when writing text.
     *
     * @param { string | Resource } content
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when writing text.
     *
     * @param { string | Resource } content
     * @param { TextOptions } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    (content?: string | Resource, value?: TextOptions): TextAttribute;
}
/**
 * @extends CommonMethod<TextAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * @extends CommonMethod<TextAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * @extends CommonMethod<TextAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * @extends CommonMethod<TextAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class TextAttribute extends CommonMethod<TextAttribute> {
    /**
     * Called when the font is set.
     *
     * @param { Font } value - the text font size and weight and family and style.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Called when the font is set.
     *
     * @param { Font } value - the text font size and weight and family and style.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    font(value: Font): TextAttribute;
    /**
     * Called when the font is set.
     *
     * @param { Font } fontValue - the text font size and weight and family and style.
     * @param { FontSettingOptions } options - font setting options.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    font(fontValue: Font, options?: FontSettingOptions): TextAttribute;
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the font color is set.
     *
     * @param { ResourceColor } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fontColor(value: ResourceColor): TextAttribute;
    /**
     * Called when the font size is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the font size is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the font size is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the font size is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fontSize(value: number | string | Resource): TextAttribute;
    /**
     * Called when the minimum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the minimum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the minimum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the minimum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    minFontSize(value: number | string | Resource): TextAttribute;
    /**
     * Called when the maximum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the maximum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the maximum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the maximum font size of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    maxFontSize(value: number | string | Resource): TextAttribute;
    /**
     * Called when the minimum font scale of the font is set.
     *
     * @param { number | Resource } scale
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    minFontScale(scale: number | Resource): TextAttribute;
    /**
     * Called when the maximum font scale of the font is set.
     *
     * @param { number | Resource  } scale
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    maxFontScale(scale: number | Resource): TextAttribute;
    /**
     * Called when the font style of a font is set.
     *
     * @param { FontStyle } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the font style of a font is set.
     *
     * @param { FontStyle } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the font style of a font is set.
     *
     * @param { FontStyle } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the font style of a font is set.
     *
     * @param { FontStyle } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fontStyle(value: FontStyle): TextAttribute;
    /**
     * Called when the font weight is set.
     *
     * @param { number | FontWeight | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the font weight is set.
     *
     * @param { number | FontWeight | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the font weight is set.
     *
     * @param { number | FontWeight | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the font weight is set.
     *
     * @param { number | FontWeight | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fontWeight(value: number | FontWeight | string): TextAttribute;
    /**
     * Called when the font weight is set.
     *
     * @param { number | FontWeight | string } weight
     * @param { FontSettingOptions } options - font setting options.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    fontWeight(weight: number | FontWeight | string, options?: FontSettingOptions): TextAttribute;
    /**
     * Set font line spacing.
     *
     * @param { LengthMetrics } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    lineSpacing(value: LengthMetrics): TextAttribute;
    /**
     * Called when the horizontal center mode of the font is set.
     *
     * @param { TextAlign } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the horizontal center mode of the font is set.
     *
     * @param { TextAlign } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the horizontal center mode of the font is set.
     *
     * @param { TextAlign } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the horizontal center mode of the font is set.
     *
     * @param { TextAlign } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    textAlign(value: TextAlign): TextAttribute;
    /**
     * Called when the vertical center mode of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the vertical center mode of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the vertical center mode of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the vertical center mode of the font is set.
     *
     * @param { number | string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    lineHeight(value: number | string | Resource): TextAttribute;
    /**
     * Called when the overflow mode of the font is set.
     *
     * @param { object } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the overflow mode of the font is set.
     *
     * @param { object } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the overflow mode of the font is set.
     *
     * @param { object } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the overflow mode of the font is set.
     *
     * @param { object } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    textOverflow(value: {
        overflow: TextOverflow;
    }): TextAttribute;
    /**
     * Called when the font list of text is set.
     *
     * @param { string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the font list of text is set.
     *
     * @param { string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the font list of text is set.
     *
     * @param { string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the font list of text is set.
     *
     * @param { string | Resource } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fontFamily(value: string | Resource): TextAttribute;
    /**
     * Called when the maximum number of lines of text is set.
     *
     * @param { number } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the maximum number of lines of text is set.
     *
     * @param { number } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the maximum number of lines of text is set.
     *
     * @param { number } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the maximum number of lines of text is set.
     *
     * @param { number } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    maxLines(value: number): TextAttribute;
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { object } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { object } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { object } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { object } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Called when the text decoration of the text is set.
     *
     * @param { DecorationStyleInterface } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    decoration(value: DecorationStyleInterface): TextAttribute;
    /**
     * Called when the distance between text fonts is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the distance between text fonts is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the distance between text fonts is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the distance between text fonts is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    letterSpacing(value: number | string): TextAttribute;
    /**
     * Called when the type of letter in the text font is set.
     *
     * @param { TextCase } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the type of letter in the text font is set.
     *
     * @param { TextCase } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the type of letter in the text font is set.
     *
     * @param { TextCase } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the type of letter in the text font is set.
     *
     * @param { TextCase } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    textCase(value: TextCase): TextAttribute;
    /**
     * Called when the baseline offset is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Called when the baseline offset is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Called when the baseline offset is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the baseline offset is set.
     *
     * @param { number | string } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    baselineOffset(value: number | string): TextAttribute;
    /**
     * Allow replication.
     *
     * @param { CopyOptions } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Allow replication.
     *
     * @param { CopyOptions } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Allow replication.
     *
     * @param { CopyOptions } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    copyOption(value: CopyOptions): TextAttribute;
    /**
     * Enable the selectable area can be dragged.
     *
     * @param { boolean } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Enable the selectable area can be dragged.
     *
     * @param { boolean } value
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    draggable(value: boolean): TextAttribute;
    /**
     * Called when the text shadow is set.
     *
     * @param { ShadowOptions } value - The shadow options.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when the text shadow is set.
     *
     * @param { ShadowOptions | Array<ShadowOptions> } value - The shadow options.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    textShadow(value: ShadowOptions | Array<ShadowOptions>): TextAttribute;
    /**
     * Called when the height adaptive policy is set.
     *
     * @param { TextHeightAdaptivePolicy } value - The height adaptive policy.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the height adaptive policy is set.
     *
     * @param { TextHeightAdaptivePolicy } value - The height adaptive policy.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextAttribute;
    /**
     * Specify the indentation of the first line in a text-block.
     *
     * @param { Length } value - The length of text indent.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Specify the indentation of the first line in a text-block.
     *
     * @param { Length } value - The length of text indent.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    textIndent(value: Length): TextAttribute;
    /**
     * Set the word break type.
     *
     * @param { WordBreak } value - The word break type.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    wordBreak(value: WordBreak): TextAttribute;
    /**
     * Set the text line break strategy type.
     *
     * @param { LineBreakStrategy } strategy - The text line break strategy type.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    lineBreakStrategy(strategy: LineBreakStrategy): TextAttribute;
    /**
     * Called when using the Clipboard menu
     *
     * @param { function } callback - callback of the listened event.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onCopy(callback: (value: string) => void): TextAttribute;
    /**
     * Text selection is achieved by specifying the start and end positions of the text.
     *
     * @param { number } selectionStart - The start position of the selected text.
     * @param { number } selectionEnd - The end position of the selected text.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    selection(selectionStart: number, selectionEnd: number): TextAttribute;
    /**
     * Set the ellipsis mode.
     *
     * @param { EllipsisMode } value - The ellipsis mode.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Set the ellipsis mode.
     *
     * @param { EllipsisMode } value - The ellipsis mode.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    ellipsisMode(value: EllipsisMode): TextAttribute;
    /**
     * Enable data detector.
     *
     * @param { boolean } enable - Enable data detector.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Enable data detector.
     *
     * @param { boolean } enable - Enable data detector.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    enableDataDetector(enable: boolean): TextAttribute;
    /**
     * Data detector with config.
     *
     * @param { TextDataDetectorConfig } config - The config of text data detector.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Data detector with config.
     *
     * @param { TextDataDetectorConfig } config - The config of text data detector.
     * @returns { TextAttribute } The attribute of the text.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    dataDetectorConfig(config: TextDataDetectorConfig): TextAttribute;
    /**
     * Bind to the selection menu.
     *
     * @param { TextSpanType } spanType - Indicates the type of selection menu.
     * @param { CustomBuilder } content - Indicates the content of selection menu.
     * @param { TextResponseType } responseType - Indicates response type of selection menu.
     * @param { SelectionMenuOptions } [options] - Indicates the options of selection menu.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Bind to the selection menu.
     *
     * @param { TextSpanType } spanType - Indicates the type of selection menu.
     * @param { CustomBuilder } content - Indicates the content of selection menu.
     * @param { TextResponseType } responseType - Indicates response type of selection menu.
     * @param { SelectionMenuOptions } [options] - Indicates the options of selection menu.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    bindSelectionMenu(spanType: TextSpanType, content: CustomBuilder, responseType: TextResponseType, options?: SelectionMenuOptions): TextAttribute;
    /**
     * Called when the text selection changes.
     *
     * @param { function } callback - callback of the listened event.
     * @returns { TextAttribute } returns the instance of the TextAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Called when the text selection changes.
     *
     * @param { function } callback - callback of the listened event.
     * @returns { TextAttribute } returns the instance of the TextAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void): TextAttribute;
    /**
     * Set font feature.
     *
     * @param { string } value - The fontFeature.
     * normal | <feature-tag-value>,
     * where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0
     * the values of <feature-tag-value> reference to doc of text component
     * number of <feature-tag-value> can be single or multiple, and separated by comma ','.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    fontFeature(value: string): TextAttribute;
    /**
     * Whether to support sensitive privacy information
     *
     * @param { boolean } supported - Whether to support sensitive privacy information.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 12
     */
    privacySensitive(supported: boolean): TextAttribute;
    /**
     * set text selectable and focusable
     *
     * @param { TextSelectableMode } mode
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    textSelectable(mode: TextSelectableMode): TextAttribute;
    /**
     * Set the custom text menu.
     *
     * @param { EditMenuOptions } editMenu - Customize text menu options.
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    editMenuOptions(editMenu: EditMenuOptions): TextAttribute;
    /**
     * Set the text with half leading.
     *
     * @param { boolean } halfLeading
     * @returns { TextAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    halfLeading(halfLeading: boolean): TextAttribute;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { boolean } isEnabled - Default value is true, set false to disable haptic feedback.
     * @returns { TextAttribute } returns the instance of the TextAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    enableHapticFeedback(isEnabled: boolean): TextAttribute;
}
/**
 * Defines Text Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Text Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Text Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Text Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const TextInstance: TextAttribute;
/**
 * Defines Text Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Text Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Text Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Text Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Text: TextInterface;
/**
 * Defines span type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines span type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum TextSpanType {
    /**
     * Only contains text.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Only contains text.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    TEXT = 0,
    /**
     * Only contains image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Only contains image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    IMAGE = 1,
    /**
     * Contains both text and image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Contains both text and image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    MIXED = 2
}
/**
 * ResponseType for contextMenu
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * ResponseType for contextMenu
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum TextResponseType {
    /**
     * Right click.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Right click.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    RIGHT_CLICK = 0,
    /**
     * Long press.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Long press.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    LONG_PRESS = 1,
    /**
     * Selected by mouse.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Selected by mouse.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    SELECT = 2
}
/**
 * Defines the options of Text.
 *
 * @interface TextOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the options of Text.
 *
 * @interface TextOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface TextOptions {
    /**
     * Text controller.
     *
     * @type { TextController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Text controller.
     *
     * @type { TextController }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    controller: TextController;
}
/**
 * Defines the controller of Text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the controller of Text.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class TextController {
    /**
     * Close the select menu when menu is on.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Close the select menu when menu is on.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    closeSelectionMenu(): void;
    /**
     * Update the styles of StyledString by setStyledString.
     *
     * @param { StyledString } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setStyledString(value: StyledString): void;
    /**
     * Get LayoutManager.
     *
     * @returns { LayoutManager } - Return the LayoutManager.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getLayoutManager(): LayoutManager;
}
